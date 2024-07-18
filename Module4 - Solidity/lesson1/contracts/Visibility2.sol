//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Visibility{
    function demo() public pure returns (string memory _str, uint _myInt){
        _str = "test";
        _myInt = 52;
    }
    //формат можно вписывать в returns и если указываем наимнование, то return не обязательно указывать
    // а также формат


}