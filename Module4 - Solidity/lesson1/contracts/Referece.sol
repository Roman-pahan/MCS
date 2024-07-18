//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract Referece1{
    uint[] public stateArr;

    function Referece()  public  {
        stateArr = [1,2,3];
        uint[] storage localStorage = stateArr; //localStorage и stateArr указывают 
        //на одно и тоже место хранения памяти, поэтому при изменении одного значения массива
        //меняются обра массива
        localStorage[0]=42;
        Referece2(localStorage);
    }

    function Referece2(uint[] storage sArr) internal{ //если изменим на memory, то ничего меняться не будет
        sArr[1]= 100;
    }
}

contract Reference2{
    uint[] public stateArr1;
    uint[] public stateArr2 = [1,2,3];

    //в storage создается два незавимых массива, значение которых просто копируются

    function demo() public {
        stateArr1 = stateArr2;
        stateArr2[0]= 42;
    }
}