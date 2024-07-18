// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract TestStrings {
string public errorMessage = "Fail"
string public constant SUCCESSMSG = "Success"
string public currentStatus;

function changeStatus(string  _currentStatus) public{
  currentStatus = _currentStatus;
}
  
}
