// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract SumItUp {    
  // Создайте переменную balance, равную 4500; 
  int public a = 4500;
  // Создайте переменную commission, равную -10;
  int public b = -10;
	
  function sum() view public returns (int){
    int total = a + b;
    return total;
  }
} 