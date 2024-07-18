//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract SavingsDif{

    struct Person{
        uint age;
        string name;
    }

    mapping (uint => Person) public  users;

    //генерация через констурктор

    constructor(){
        Person memory newPerson = Person({age: 30, name: "John"});
        users[0]=newPerson;
    }


    function demo() public view returns(string memory){ //считывание данных блокчейна
        Person memory myPerson = users[0];
        return myPerson.name;
    }

    
    function demo1() public { //изменение данных блокчейна
        Person storage myPerson = users[0];
        myPerson.age++;
    }
}