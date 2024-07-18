// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract ConstantNumber {    
    // uint public constant commission = 1992;
    uint public immutable commission;
    constructor(uint _commission){
        commission = _commission;
    }

}