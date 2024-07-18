//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

    contract IfElse {
        function ifelse(uint _age) public pure returns(string memory) {
            string memory result;
            if(_age < 18){
                result = "not allowed!";
            }else if(_age>=18 && _age<30){
                result = "allowed!";
            }else{
                result = "100% allowed!";
            }

            return result;
        }
    }


