//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Game3 {
    address reward = 0xa724a699d3afF35ea92B321134e20A439655C63e;
    event Winner(address winner);

    function win() public payable {
        require(msg.value <= 1 gwei, "Incorrect message value passed in!");

        if (address(this).balance >= 3 gwei) {
            emit Winner(msg.sender);
        }
        (bool success, ) = reward.delegatecall(
            abi.encodeWithSignature("addWinner(string)", "game1")
        );
        require(success);
    }
}
