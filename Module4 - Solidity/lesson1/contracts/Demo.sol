//SPDX-License-Identifier: GPL-3.0 

pragma solidity ^0.8.0;

contract Demo{
    uint public myVar = 5;//state переменная
    uint public sum; //state переменная
    address public sender;//state переменная
    uint public timestamp;
    uint public number;
    uint public gaslimit;
    uint public gasprice;
    address public contractAddr;
    uint public balance;

    function demo() public payable { //payable для приема средств
        sum = msg.value; //msg - глобальный объект
        sender = msg.sender; //msg - глобальный объект
        timestamp = block.timestamp;//block - глобальный объект
        number = block.number; //block - глобальный объект
        gaslimit = block.gaslimit;//block - глобальный объект
        gasprice = tx.gasprice; //tx - глобальный объект
        contractAddr = address(this);
        balance = contractAddr.balance;

        // string memory myStr = "test"; //локальные переменные, значение будет теряться после выхода из функции
        // uint myLocalVar = 42; //локальные переменная
        // myLocalVar++; //изменение локальной переменная
        // myVar++;
    }
}