//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Refereces{
    function Referece()  public view returns(uint[] memory) {
        uint[] memory a = new uint[](3);
        a[0] = 1;

        uint[] memory b = new uint[](3);
        b = a;

        b[1]=42;
        return  a;
    }
}