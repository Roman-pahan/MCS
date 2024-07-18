//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract MappingsNames {
    mapping(uint => string) public  namesList;

    function addNames(uint _number, string memory _name) public {
        namesList[_number] = _name;
    }

}