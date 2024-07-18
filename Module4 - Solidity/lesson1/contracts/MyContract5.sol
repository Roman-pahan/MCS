//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MyContract {    
    uint[] public  massive;

    function massive5() public  {
        for(uint i=48; i<203; i++){
            if(i%5==0){
                massive.push(i);
            }
        }
    }

} 