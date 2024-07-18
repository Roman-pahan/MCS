// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Greeter {
    uint public test;
    string private greeting;

    constructor(string memory _greeting){
        console.log("Deploying a Greeter with greeting", _greeting);
        greeting=_greeting;
    }
    function greet()public view returns (string memory){
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Charging greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
