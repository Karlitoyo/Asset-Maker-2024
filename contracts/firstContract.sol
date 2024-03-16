// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract FirstContract {
    address public owner;
    uint public NftLenderIndex = 0;
    uint[] public NftLenderIndexArray;

    // mapping of the lending index to the owner
    mapping(uint => address) public lendingNftToAddress;
    mapping(address => uint[]) public NftLenderIndexMappingAddress;

    constructor(uint initialLenderIndex) {
        owner = msg.sender;
        NftLenderIndex = initialLenderIndex;
    }

    // adds a new lender to the lending index
    function addLender() public {
        require(msg.sender == owner, "Only owner can add lender");
        NftLenderIndex++;
    }

    // checks if the lending index is valid or not and if it is already owned
    function issueLendingNft(uint lendingIdx) public {
        require(lendingIdx < NftLenderIndex, "Invalid lending index");
        require(lendingNftToAddress[lendingIdx] == address(0) , "NFT already owned");

        lendingNftToAddress[lendingIdx] = msg.sender;
        NftLenderIndexMappingAddress [msg.sender].push(lendingIdx);
        NftLenderIndexArray.push(lendingIdx);
    }

    // returns owner
    function getOwner() public view returns (address) {
        return owner;
    }
}
