//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract ENSdomen{

    struct TransInfo{
        string domen;
        address addr;
        uint time;
        uint value;
    }

    mapping (string => TransInfo) public transinfo;

    function pushNewDom(string memory _domen) public payable {
        transinfo[_domen].domen = _domen;
        transinfo[_domen].addr = msg.sender;
        transinfo[_domen].time = block.timestamp;
        transinfo[_domen].value += msg.value;
        
    }

    function getAddrByDomen(string memory _domen) public view returns (address){
        return  transinfo[_domen].addr;
    }


    function withdrawMoney(address payable _addr, uint _amount) public { 
        address payable receiver = _addr;
        receiver.transfer(_amount);
    }
}