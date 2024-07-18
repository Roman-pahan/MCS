// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract FundsDemo {

  uint public balanceReceived; //считает только все полученные деньги

  function receiveMoney() public payable { //получает деньги с выбранного аккаунта
    balanceReceived += msg.value;
  }

  function getBalance() public view returns (uint) {//считает именно полученый баланс
    return address(this).balance;
  }
    function withdrawMoney(address payable _addr) public { //возращает в выбранный аккаунт
        address payable receiver = _addr;
        receiver.transfer(this.getBalance());
    }
}