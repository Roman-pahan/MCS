// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;


contract SelfDestruct{

    bool alive = true;

    function pay() public payable {
        require(alive, "I'm dead!");
    }

    function balance() public view returns(uint){
        require(alive, "I'm dead!");
        return address(this).balance;
    }

    function destroy() public {

        // selfdestruct(payable(msg.sender));

        require(alive, "I'm dead!");
        address payable _to = payable(msg.sender);
        _to.transfer(balance());
        alive = false;
    }
}