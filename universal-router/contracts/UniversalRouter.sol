// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

// Command implementations
import {Dispatcher} from './base/Dispatcher.sol';
import {RewardsCollector} from './base/RewardsCollector.sol';
import {RouterParameters, RouterImmutables} from './base/RouterImmutables.sol';
import {Commands} from './libraries/Commands.sol';
import {IUniversalRouter} from './interfaces/IUniversalRouter.sol';

contract UniversalRouter is RouterImmutables, IUniversalRouter, Dispatcher, RewardsCollector {
    modifier checkDeadline(uint256 deadline) {
        if (block.timestamp > deadline) revert TransactionDeadlinePassed();
        _;
    }
    address constant UNSUPPORTED_PROTOCOL = address(0);
    bytes32 constant BYTES32_ZERO = bytes32(0);


        RouterParameters params = RouterParameters({
            permit2: 0xD7ae0F4c2CD4a92daE8806C1b381fa7a0Cb775be,
            weth9: 0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c,
            seaport: UNSUPPORTED_PROTOCOL,
            seaportV1_4: UNSUPPORTED_PROTOCOL,
            openseaConduit: UNSUPPORTED_PROTOCOL,
            nftxZap: UNSUPPORTED_PROTOCOL,
            x2y2: UNSUPPORTED_PROTOCOL,
            foundation: UNSUPPORTED_PROTOCOL,
            sudoswap: UNSUPPORTED_PROTOCOL,
            elementMarket: UNSUPPORTED_PROTOCOL,
            nft20Zap: UNSUPPORTED_PROTOCOL,
            cryptopunks: UNSUPPORTED_PROTOCOL,
            looksRare: UNSUPPORTED_PROTOCOL,
            routerRewardsDistributor: UNSUPPORTED_PROTOCOL,
            looksRareRewardsDistributor: UNSUPPORTED_PROTOCOL,
            looksRareToken: UNSUPPORTED_PROTOCOL,
            v2Factory: UNSUPPORTED_PROTOCOL,
            v3Factory: 0x0110AcD40b5729e2d859A8ef8494a8383f23A54C,
            pairInitCodeHash: BYTES32_ZERO,
            poolInitCodeHash: 0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54,
            paymentRecipient: UNSUPPORTED_PROTOCOL,
            paymentAmountBips: 0
        });

    constructor() RouterImmutables(params) {}

    /// @inheritdoc IUniversalRouter
    function execute(bytes calldata commands, bytes[] calldata inputs, uint256 deadline)
        external
        payable
        checkDeadline(deadline)
    {
        execute(commands, inputs);
    }

    /// @inheritdoc Dispatcher
    function execute(bytes calldata commands, bytes[] calldata inputs) public payable override isNotLocked {
        bool success;
        bytes memory output;
        uint256 numCommands = commands.length;
        if (inputs.length != numCommands) revert LengthMismatch();

        // loop through all given commands, execute them and pass along outputs as defined
        for (uint256 commandIndex = 0; commandIndex < numCommands;) {
            bytes1 command = commands[commandIndex];

            bytes calldata input = inputs[commandIndex];

            (success, output) = dispatch(command, input);

            if (!success && successRequired(command)) {
                revert ExecutionFailed({commandIndex: commandIndex, message: output});
            }

            unchecked {
                commandIndex++;
            }
        }
    }

    function successRequired(bytes1 command) internal pure returns (bool) {
        return command & Commands.FLAG_ALLOW_REVERT == 0;
    }

    /// @notice To receive ETH from WETH and NFT protocols
    receive() external payable {}
}
