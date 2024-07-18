//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Modificator{
    uint public  total;
    uint myInt;
    uint[] arr;


    //transaction, нельзя делать return
    function add(uint _num) public {
        arr.push(_num);
    }


    //call
    function get(uint _index) public view returns(uint){
        return arr[_index];
    }


    //pure функция может только считывать входные данные и давать вывод, 
    //одна чистая функция может вызывать другую
    function count(uint _pain) public pure returns(uint){
        return  _pain*2;
    }

    function pay() public payable {
        total += msg.value;
    }
}