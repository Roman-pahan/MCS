// SPDX-License-Identifier: GPL-3.0
pragma solidity <0.8.1;

contract Overflow {
  uint8 public crit = type(uint8).max;
    
  function increment() public {
    // В отличие от версии 0.8.0 переполнение происходит без ошибки и вне unchecked-блока
    crit++;
  }  
}