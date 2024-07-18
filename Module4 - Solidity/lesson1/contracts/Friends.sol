//SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.0;

contract MyContract {
    struct Friends{
        string name;
        bool invited;
    }
    //   Friends friend1 = Friends("Britney", true );

    Friends[] public friends;
    Friends [] public guestList ;

    function addFriend(string memory _name, bool _invited) public {
        Friends memory newFriend = Friends(_name, _invited);
        friends.push(newFriend);
    }

}