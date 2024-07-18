//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Memory{
    function memor(uint[] memory _arr) public pure returns (uint[] memory){
        _arr[0] = 1;
        return _arr;
}

    function calldat(uint[] calldata _arr1) public pure returns (uint){
        return _arr1[0]*2;
}
}