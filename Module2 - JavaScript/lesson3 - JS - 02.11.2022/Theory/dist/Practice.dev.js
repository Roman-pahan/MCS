"use strict";

// пустой массив
var meebits = []; // массив чисел

var cryptoPunks = [7804, 3100, 5217, 7252]; // массив строк

var lootItems = ["Amulet of Titans", "Cap of Brilliance"]; // смешанный массив

var nfts = [2140, false, "Gloves of Protection"];

function buble(meebits, cryptoPunks, lootItems, nfts) {
  cryptoPunks.push(2140);
  console.log(meebits);
  console.log(cryptoPunks);
  console.log(lootItems);
  console.log(nfts);
}

buble(meebits, cryptoPunks, lootItems, nfts);
console.log([].length);
console.log(cryptoPunks.length);
console.log(lootItems[1]);

function getEmptyArray() {
  return [];
}

console.log(getEmptyArray());

function getTotalElements(array) {
  return array.length;
}

console.log(getTotalElements(["ван", "ту", "сри"])); // 3

console.log(getTotalElements([])); // 0

function addBrave(browsers) {
  browsers.push("Brave");
  return browsers;
}

console.log(addBrave(["Firefox", "Chrome"])); // ["Firefox", "Chrome", "Brave"]

console.log(addBrave(["Safari"])); // ["Safari", "Brave"]

function addBrowser(browsers, browser) {
  browsers.push(browser);
  return browsers;
}

console.log(addBrowser(["Opera", "Brave"], "Edge")); // ["Opera", "Brave", "Edge"]

console.log(addBrowser([], "Firefox")); // ["Firefox"]

function getFirstBrowser(browsers) {
  return browsers[0];
}

console.log(getFirstBrowser(["Opera", "Brave", "Edge"])); // "Opera"

console.log(getFirstBrowser(["Firefox", "Chrome"])); // "Firefox"

function getLastBrowser(browsers) {
  return browsers[browsers.length - 1];
}

console.log(getLastBrowser(["Opera", "Brave", "Edge"])); // "Edge"

console.log(getLastBrowser(["Firefox", "Chrome"])); // "Chrome"

var punks = [7804, 3100, 5217, 7252];
punks.forEach(function (punk) {
  // Действие с отдельным панком
  console.log(punk);
});

function logIntoConsole(elements) {
  //Внутрення переборка
  elements.forEach(function (element) {
    console.log(element);
  });
}

logIntoConsole(["Mr White", "Mr Pink"]); // Mr WhiteMr White", "Mr Pink"
// Mr Pink

logIntoConsole(["Mr Brown", "Mr Orange"]); // Mr Brown
// Mr Orange

function logLootBags(bags) {
  bags.forEach(function (bag) {
    console.log(bag);
  });
} // Примеры использования


logLootBags([3043, 7658]); // 3043
// 7658

logLootBags([2478, 3758]); // 2478
// 3758

function logOpcodes(opcodes) {
  opcodes.forEach(function (opcode) {
    console.log(opcode);
    return console.log(128); //не камильфо так делать, потому что типо не возвращает
  });
  return console.log(256);
}

logOpcodes(["Mr Brown", "Mr Orange", "Mr White", "Mr Pink"]);
console.log("Практика №36");

function sumBags(bags) {
  var sumBag = 0;
  bags.forEach(function (bag) {
    console.log(bag);
    sumBag += bag;
  });
  console.log(sumBag);
  return sumBag;
}

sumBags([3043, 7658, 5046, 949]); // 16696

sumBags([6109, 52, 2422, 696]); // 9279

function sumSomeBags(bags) {
  var sumBag = 0;
  bags.forEach(function (bag) {
    console.log(bag);

    if (bag.toString().length === 4) {
      sumBag += bag;
    }
  });
  console.log(sumBag);
  return sumBag;
}

sumSomeBags([3043, 7658, 5046, 949]); // 15747

sumSomeBags([6109, 52, 2422, 625]); // 8531

console.log("Практика №38");

function sumOddBags(bags) {
  var sumBag = 0;
  bags.forEach(function (bag) {
    console.log(bag);
    var chetnechet = bag % 2;

    if (chetnechet === 1) {
      sumBag += bag;
    }
  });
  console.log(sumBag);
  return sumBag;
}

sumOddBags([3043, 7658, 5046, 949]); // 3992

sumOddBags([6109, 52, 2422, 625]); // 6734

function getDropdown(currencies) {
  var html = '<option value="">Выберите валюту</option>';
  currencies.forEach(function (currency) {
    html += "<option value=".concat(currency.toLowerCase(), ">").concat(currency, "</option>");
  });
  return html;
}

getDropdown(["Bitcoin", "Ethereum", "Tether", "Solana"]);

function renderTableRows(rows) {
  var html2;
  rows.forEach(function (row) {
    html2 += "<tr>";
    row.forEach(function (column) {
      html2 += "<td>".concat(column, "</td>");
    });
    html2 += "</tr>";
  });
  console.log(html2);
  return html2;
}

renderTableRows([["Bitcoin", "47311"], ["Ethereum", "3407"], ["Solana", "163"], ["Tether", "1"]]);
console.log();
console.log();
console.log();
console.log();