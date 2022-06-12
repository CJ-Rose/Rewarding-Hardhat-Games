//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Game1 {
    address reward = 0xa724a699d3afF35ea92B321134e20A439655C63e;
    event Winner(address winner);

    function win() public {
        emit Winner(msg.sender);
        (bool success, ) = reward.delegatecall(
            abi.encodeWithSignature("addWinner(string)", "game1")
        );
        require(success);
    }
}
