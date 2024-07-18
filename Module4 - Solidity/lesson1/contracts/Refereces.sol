//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Refereces{
    uint[] public stateArr;

    function Referece(uint[] memory mArr)  public  {
        stateArr = mArr; //идет передача всего массива, нельзя по частям
        mArr[0] = 10;
    }
}