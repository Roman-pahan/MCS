//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Iterator{
    uint[] public arr;
    function Iterate() public {
        for(uint i=0; i<10; i++){
            if(i==5){
                continue;
            }
            arr.push(i+1);
        }
    }
}