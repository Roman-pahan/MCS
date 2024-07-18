//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract MappingDemo1 {
  mapping(address => bool) public addressesMap;
    
  function valueByKey(address _addr) public view returns (bool) {
    return addressesMap[_addr];
  }
}