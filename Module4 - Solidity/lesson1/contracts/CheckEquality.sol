// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract CheckEquality {
    bool public result;
    function isEqual(int _a, int _b) public{
       result = _a == _b;
    }
}  