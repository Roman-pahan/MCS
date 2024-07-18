// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;

contract First {
    address public owner;
    uint total;
    address public first = address(this);

    constructor(){
        owner = msg.sender;
    }

    function getMoney() public payable {
        total += msg.value;
    }

    function sendMoney(address payable _addr, uint _amount) public { //возращает в выбранный аккаунт
        address payable receiver = _addr;
        receiver.transfer(_amount);
    }
     
}  


contract Second {
    address public owner;
    uint total;
    address public second = address(this);

    constructor(){
        owner = msg.sender;
    }

    function getMoney() public payable {
        total += msg.value;
    }

    function sendMoney(address payable _addr, uint _amount) public { //возращает в выбранный аккаунт
        address payable receiver = _addr;
        receiver.transfer(_amount);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }  

    receive() external payable {
    }

    fallback() external payable  { 

    }
     
}  

contract Third {
    address public third = address(this);
} 