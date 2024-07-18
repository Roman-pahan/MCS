//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
contract MyContract {    
    function fctrl(uint _val) public pure returns(uint result){
        result = 1;
        for(uint i=1; i<= _val; i++){
            result = result*i;
        }
        return result;
    }
} 