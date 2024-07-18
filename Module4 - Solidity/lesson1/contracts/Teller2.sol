// SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Teller2 {
    uint public totalAmount;

    function receiveMoney() public payable {
        totalAmount += msg.value;
    }

    function getBalance() public view returns(uint){
        return address(this).balance;
    }
}