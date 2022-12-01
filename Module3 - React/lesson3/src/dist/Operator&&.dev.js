"use strict";

function getOverload(occupants) {
  if (occupants > 7) {
    return "Перегруз!";
  }

  return false;
}

console.log(getOverload(6));
console.log(getOverload(8));

function getOverload1(occupants) {
  return occupants > 7 && "Перегруз!";
}

console.log(getOverload1(6));
console.log(getOverload1(8));