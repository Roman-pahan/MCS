// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract StructDemo1 {

    address myAddr = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    uint public amount;


    // struct
    struct Payment{
        address sernderAdrr;
        uint amount;
    }


    Payment[] public payments; //тип данный массив структур


    function demo() public {
        Payment memory newPayment = Payment(myAddr, 42);
        payments.push(newPayment);
        amount = newPayment.amount;
    }


}