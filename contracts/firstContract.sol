// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract FirstContract {
    address public owner;
    uint public NftLenderIndex = 0;

    constructor() {
        owner = msg.sender;
    }

    function addLender() public {
        require(msg.sender == owner, "Only owner can add lender");
        NftLenderIndex++;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
