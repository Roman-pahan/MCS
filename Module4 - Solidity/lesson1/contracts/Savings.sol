//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Savings{

    string public test = "storage"; //storage
    function demo(string memory _myStr) public {//в инпут нельзя storage формат
            // string memory myStr = "memory";
            test = _myStr;// меняем блокчейн
    }
}