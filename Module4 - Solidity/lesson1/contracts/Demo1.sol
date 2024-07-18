//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Demo1 {
    address public immutable owner;

    constructor (address _newOwner){
        owner = _newOwner;
    }

    function demo() public view returns (uint){
        require(msg.sender == owner, "");
        return 42;
    }
}