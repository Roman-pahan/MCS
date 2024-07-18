//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract MyContract {
    // uint[10] massive = [1,5,3,5,67,7,32,556,7,65];
     string[10] massive = ["a","n","r","u","y","z","q","n","iu","jh"];

    function getValue(uint _x) view public  returns ( string memory) {

        return massive[_x];
    }

}