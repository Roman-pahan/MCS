// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;

contract FunctionsDemo {
  address sender;
  mapping(address => uint) public balanceReceived;
    
  function receiveMoney() public payable {
    balanceReceived[msg.sender] += msg.value;
  }

  fallback() external payable { 
    sender = msg.sender;
  }

  receive() external payable { 
    receiveMoney(); 
  }
}