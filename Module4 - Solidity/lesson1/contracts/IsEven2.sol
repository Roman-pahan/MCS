//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract IsEven2 {
    function Iseven2(int _num) public pure returns(string memory){
        string memory status;
        _num%2==0?status="even":status="odd";
        return status;
    }
}