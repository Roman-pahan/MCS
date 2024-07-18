
//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;



contract RequireRevert{
    address public owner;
    uint public total;

    constructor(){
        owner = msg.sender;
    }

    
    function getMoney() public payable {
        total += msg.value;
    }

    function withdraw(address payable _to) public {
        require(owner == _to, "You are not an owner!");
        // if(owner != _to){ //тоже самое
        //     revert("You are not an owner!");
        // }
        // _to.transfer(total);
        // assert(owner == _to); //Критическая остановка без объяснений, лучше не использовать

        address thisContract = address(this);
        _to.transfer(thisContract.balance);
        total = 0;
    }

    receive() external payable { 
        getMoney();
    }

    fallback() external payable { }
}