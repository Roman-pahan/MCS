"use strict";

var numbers = [9, 5, 14, 3, 11];
var numbersAboveTen = numbers.filter(function (number) {
  return number >= 10;
});
console.log(numbersAboveTen); // [14, 11]

var numbers2 = [9, 5, 14, 3, 11];
var numbersAboveTen2 = numbers.filter(function (number) {
  return true;
});
console.log(numbersAboveTen2); // [14, 11]
// function getAboveZero(temperatures) {
//     return temperatures.filter(function(temp) {
//       return temp > 0
//     })
//   }

function getAboveZero(temperatures) {
  var plustemperatures = temperatures.filter(function (temperature) {
    return temperature > 0;
  });
  return plustemperatures;
} // getAboveZero([-5, 12, 3]) // [12, 3]
// getAboveZero([1, -3, -2, 4, 10]) // [1, 4, 10]


console.log(getAboveZero([-5, 12, 3]));
console.log(getAboveZero([1, -3, -2, 4, 10]));

function getSubZero(temperatures2) {
  return temperatures2.filter(function (temperature) {
    return temperature < 0;
  });
}

console.log(getSubZero([-5, 12, 3])); // [-5]

console.log(getSubZero([1, -3, -2, 4, 10])); // [-3, -2]

var testnets = ["Ropsten", "Kovan", "Rinkeby", "Goerli"];
var result = testnets.find(function (testnet) {
  return testnet === "Rinkeby";
});
console.log(result); // "Rinkeby"

var checks = [4.7, 6.2, 8.0, 5.5, 7.1];
var firstSpike = checks.find(function (check) {
  //Возвращает именно значение - не массив
  return check > 6.5;
});
console.log(firstSpike); // 8.0

var testnets1 = ["Ropsten", "Kovan", "Rinkeby", "Goerli"];
console.log(testnets1.filter(function (testnet) {
  return testnet.length > 10;
})); // []

console.log(testnets1.find(function (testnet) {
  return testnet.length > 10;
})); // undefined

function getLoot(bags, searchBag) {
  console.log(bags.find(function (bag) {
    return bag === searchBag;
  }));
}

getLoot([6969, 1, 1337, 420], 420); // 420

getLoot([6969, 1, 1337, 420], 245); // undefined

function getOddLoot(bags) {
  console.log(bags.filter(function (bag) {
    if (bag % 2 === 1) {
      return bag;
    }
  }));
}

getOddLoot([234, 45, 2656, 5]); // [45, 5]

getOddLoot([4592, 567, 5678, 89]); // [567, 89]

var numbers3 = [1, 2, 3, 4];
var races = ["Zerg", "Protoss", "Terran"];
var doubled = numbers3.map(function (number) {
  return number * 2;
});
var tags = races.map(function (race) {
  return race[0];
});
console.log(doubled); // [2, 4, 6, 8]

console.log(tags); // ["Z", "P", "T"]
//Метод проверки наличия элемента в массиве

console.log(numbers3.includes(5)); // false

console.log(doubled.includes(4)); // true

console.log(races.includes("Orc")); // false

console.log(tags.includes("Z")); // true
//Склеивание массива

var seal1 = races.join(""); // "ZergProtossTerran"

var seal2 = races.join("_"); // "Zerg_Protoss_Terran"

var seal3 = races.join("@@@"); // "Zerg@@@Protoss@@@Terran"

console.log(seal1);
console.log(seal2);
console.log(seal3); //JS использует .toString() при рендере массивов на веб-странице

function isTxIncluded(bk, tx) {
  return bk.includes(tx);
}

console.log(isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], "0x9e0a")); // false

console.log(isTxIncluded(["0x912f", "0x8d19", "0x20ba"], "0x8d19")); // true

function getSizes(words) {
  return words.map(function (word) {
    return word.length;
  });
}

console.log(getSizes(["Moscow", "Coding", "School"])); // [6, 6, 6]

console.log(getSizes(["Do", "Your", "Own", "Research"])); // [2, 4, 3, 8]
// function getWithSpaces(strings) {
//     const joined = strings.join(" ")
//     return [joined, joined.length] 
//   }

function getWithSpaces(strings) {
  return [strings.join(" "), strings.join(" ").length];
}

console.log(getWithSpaces(["Moscow", "Coding", "School"])); // ["Moscow Coding School", 20]

console.log(getWithSpaces(["Do", "Your", "Own", "Research"])); // ["Do Your Own Research", 20]