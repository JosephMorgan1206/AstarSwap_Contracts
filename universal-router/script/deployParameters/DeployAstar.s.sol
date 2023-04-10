// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import {DeployUniversalRouter} from '../DeployUniversalRouter.s.sol';
import {RouterParameters} from 'contracts/base/RouterImmutables.sol';

contract DeployAstar is DeployUniversalRouter {
    function setUp() public override {
        params = RouterParameters({
            permit2: 0xD7ae0F4c2CD4a92daE8806C1b381fa7a0Cb775be,
            weth9: 0x81ecac0d6be0550a00ff064a4f9dd2400585fe9c,
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

        unsupported = 0xEf1c6E67703c7BD7107eed8303Fbe6EC2554BF6B;
    }
}
