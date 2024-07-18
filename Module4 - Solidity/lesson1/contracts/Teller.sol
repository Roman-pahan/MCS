// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Teller {
   uint bal;

   function setBalance(address _ourAdr) public {
        bal = _ourAdr.balance;
   }
}