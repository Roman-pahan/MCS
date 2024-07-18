//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract MassiveSavings{

    uint[] public massive; //storage

    function demo(/*uint[] memory _massive*/) public pure returns (uint[] memory) {//в инпут нельзя storage формат
            uint[] memory newArr = new uint[](3); //массивы в памяти не могут быть динамическими
            newArr[0] = 42;
            newArr[1]= 52;
            newArr[2]= 67;
            return newArr;
            // massive = _massive;
            // massive.push(1);
            // return massive;
    }
}