//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
contract IsEven {   
    function Iseven(int _num) public pure returns(string memory){
        string memory status;
        if(_num%2==0){
            status= "even";
    }else if(_num%2==1 ||_num%2==-1){
        status= "odd";
    }
    return status;
    }
} 