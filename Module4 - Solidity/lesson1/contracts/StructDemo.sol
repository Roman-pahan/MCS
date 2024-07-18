// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract StructDemo {
    //дочерняя структура
  struct Payment { //создание структутры оплаты [кол-во денег в транзакции, время]
    uint amount;
    uint timestamp;
  }
  //верхняя структура
  struct Balance {  //создание структуры баланса [общий баланс, кол-во тразакций, 
    uint totalBalance; // сопоставление номер платежа от структуры оплаты]
    uint numPayments;
    mapping(uint => Payment) payments;
  }
  mapping(address => Balance) public balanceReceived; //сопоставление адреса от баланса, самая старшая конструкция

  function receiveMoney() public payable {
  balanceReceived[msg.sender].totalBalance += msg.value;//добавляем платеж в контракт 
  //1. обращение к balanceReceived по адресу отправителя balanceReceived[msg.sender]
  //2.  спуск к totalBalance [msg.sender].totalBalance, добавление к существующему значению уже нового.
  Payment memory payment = Payment(msg.value, block.timestamp); //записываем данные в структутру Payment
  //1. Payment рассматривается как формат, запись в память, платеж
  balanceReceived[msg.sender].payments[balanceReceived[msg.sender].numPayments] = payment; //функция 
  //1. balanceReceived[msg.sender] обращение к структуре Balance по адресу через сопоставление
  //2. balanceReceived[msg.sender].payments[..] обращение к стуктуре Payment по номеру операции через сопоставление
  //3. Номер операции balanceReceived[msg.sender].numPayments
  //4. Присвоение данных payment для Payment
  balanceReceived[msg.sender].numPayments++;
  //увеличение при записи новой транзакции на 1
}

    function withdrawAllMoney(address payable _to) public { //Функция возврата денежных средств
    // получаем адрес кому всё вернуть
    uint balanceToSend = balanceReceived[msg.sender].totalBalance;
    //получаем информацию о балансе, который был отправлен с этого адреса
     balanceReceived[msg.sender].totalBalance = 0;
     //обнуляем баланс
    _to.transfer(balanceToSend);
    //отправляем цифру на которую обнулили баланс
}
}