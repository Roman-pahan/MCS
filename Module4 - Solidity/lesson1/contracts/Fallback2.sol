// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;

contract Fallback2{
    address public owner;
    uint public total;
    address public fallback2 = address(this);

    constructor(){ //чтобы не менять исходный код
        owner = msg.sender;
    }

    function getMoney() public payable {
        total += msg.value;
    }

    receive() external payable {
        getMoney();
    }

    fallback() external payable  { 

    }

}