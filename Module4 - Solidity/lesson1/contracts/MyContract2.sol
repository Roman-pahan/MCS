// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;

contract MyContract2 {
   enum Mood {surprise,sadness, disgust, fear, happiness,anger}

   Mood public emotions;

   function changeMood() public {
    emotions = Mood.happiness;
   }
} 