//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Visibility{
    function demo() public pure returns (string memory, uint){
        return ("test", 52);
    }

    function caller() public pure returns(uint){
        (, uint _myInt) = demo(); //распаковка
        return _myInt;
    }
}