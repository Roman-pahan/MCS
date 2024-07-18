//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract MyContract1 {

    uint[] massive = [1,3,4,5,8,9,10,12];

    function getLength() view  public returns(bool){
       return  massive.length > 10;
    }

}