//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.3;

contract Game2 {
    uint8 y = 210;
    address reward = 0xa724a699d3afF35ea92B321134e20A439655C63e;

    event Winner(address winner);

    function win(uint8 x) public {
        uint8 sum = x + y;
        require(sum == 10, "Incorrect argument passed in!");
        emit Winner(msg.sender);
        (bool success, ) = reward.delegatecall(
            abi.encodeWithSignature("addWinner(string)", "game1")
        );
        require(success);
    }
}
