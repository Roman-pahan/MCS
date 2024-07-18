//SPDX-License-Identifier: GPL-3.0 

pragma solidity ^0.8.0;

contract Transfers{
    uint public myVar;
    uint public myAnotherVar;

    function myFunc() public {
        
        myAnotherVar = myVar + 1;
    }
}