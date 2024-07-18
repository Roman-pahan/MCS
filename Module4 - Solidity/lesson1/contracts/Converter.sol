//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Converter {
  string[] public units = ["Finney", "Gwei", "Wei"];
    
    function Convert(uint _ethAmount, uint _index) public pure  returns (uint){
        if(_index ==0){
            return _ethAmount*1000;
        }else if(_index ==1){
            return _ethAmount*1000000000;
        }else  if(_index ==2){
            return _ethAmount*1000000000000000000;
        }else{
            return _ethAmount;
        }
    }
} 