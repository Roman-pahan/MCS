//SPDX-License-Identifier: GPL-3.0 

pragma solidity ^0.8.0;

contract Sample1{
    uint8 myInt;
    uint256  mySecondInt;
    bytes32 public  myVar32 = "string goes here";
    uint public myLength;
    // когда просто bytes, то длина динамическая

    function demo() public {
        myLength = myVar32.length;
    }
}