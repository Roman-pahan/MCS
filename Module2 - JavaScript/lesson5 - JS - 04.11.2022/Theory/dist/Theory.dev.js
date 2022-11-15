"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require("prettier"),
    check = _require.check;

var block = {
  height: 13272801,
  transactions: 452,
  minedBy: "Spark Pool",
  reward: 2.4811,
  stateRoot: "0xaa8f4"
};
console.log(block.height);
console.log(block.transactions);
console.log(block.minedBy);
console.log(block.reward);
console.log(block.stateRoot); //const оставляет возможность редактирования содержимого объекта

block.height = 13272801 + 1;
block.transactions = 0;
block.minedBy = "Hiveon Pool";
console.log(block.height);
console.log(block.transactions);
console.log(block.minedBy);
console.log(block.reward);
console.log(block.stateRoot); // function getAnimeDetails() {
//   return {
//     title: "Dr. Stone",
//     episodes: 24,
//     ongoing: false
//   }
// }

function getAnimeDetails() {
  var film = {
    title: "Harry Potter",
    episodes: 8,
    ongoing: false
  };
  return film;
}

console.log(getAnimeDetails());

function getEpisodes(anime) {
  return "\u0410\u043D\u0438\u043C\u0435 ".concat(anime.title, " \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 ").concat(anime.episodes, " \u0441\u0435\u0440\u0438\u0439");
}

console.log(getEpisodes({
  title: "Code Geass",
  episodes: 25
})); // "Аниме Code Geass включает 25 серий"

console.log(getEpisodes({
  title: "Death Note",
  episodes: 37
})); // "Аниме Death Note включает 37 серий"

function removeOpening(episode) {
  episode.opening = false;
  return episode;
}

console.log(removeOpening({
  number: 23,
  opening: true
})); // {number: 23, opening: false}

console.log(removeOpening({
  number: 37,
  opening: true
})); // {number: 37, opening: false}

var bitcoin = {
  title: "Bitcoin",
  price: 47311
};

function renderTableRow(details) {
  var html = "";
  html += "<tr>\n      <td>".concat(details.title, "</td>\n      <td>").concat(details.price, "</td>\n  </tr>");
  return html;
}

console.log(renderTableRow(bitcoin));

function addOne() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  //для исключения underfined используются параметры по умолчанию
  return number + 1;
}

console.log(addOne(2)); // 3

console.log(addOne(5)); // 6

console.log(addOne()); // ?

function welcomeUser() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "user";
  return "Hello ".concat(name);
}

console.log(welcomeUser("Vitalik")); // "Hello Vitalik"

console.log(welcomeUser()); // "Hello user"

function sum() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
}

console.log(sum(2, 4)); // 6

console.log(sum(3, 6)); // 9

console.log(sum(3)); // NaN (должна возвращать 3)

console.log(sum()); // NaN (должна возвращать 0)

function logEpisodes() {
  var season = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  season.forEach(function () {
    var episode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    console.log(episode);
  });
}

logEpisodes([1, 2, 3, 4]); // выводит номера серий в консоль

logEpisodes(); // не должна ломаться
//одно и тоже
// function sum(a, b) {
//   return a + b
// }
// const sum = function(a, b) {
//   return a + b
// }
// const sum = (a, b) => {
//   return a + b
// }
// function triple

var triple = function triple(value) {
  return value * 3;
};

console.log(triple(2)); // 6

var triple2 = function triple2(x) {
  return x * 3;
};

console.log(triple2(5)); // 6

var sum1 = function sum1(a, b) {
  return a + b;
};

console.log(sum1(4, 5));
var glucoseChecks = [5.4, 8.1, 6.3, 4.9];
glucoseChecks.forEach(function (glucoseCheck) {
  console.log(glucoseCheck);
});
var glucoseChecks2 = [5.4, 8.1, 6.3, 4.9];
var glucoseSpikes = glucoseChecks2.filter(function (glucoseCheck) {
  return glucoseCheck > 7.5;
});
console.log(glucoseSpikes); // [8.1]

console.log("Практика 57");

var getAvgGlucose = function getAvgGlucose(checks) {
  var sum = 0;
  var amount = 0;
  checks.forEach(function (check) {
    sum += check;
    amount++;
  });
  return (sum / amount).toFixed(1);
};

console.log(getAvgGlucose([5.4, 8.1, 6.3, 4.9])); // 6.2

var getGlucoseSpikes = function getGlucoseSpikes(checks) {
  return checks.filter(function (check) {
    return check > 7.5;
  });
};

console.log(getGlucoseSpikes([4.2, 8.5, 6.6, 9.1, 5.0])); // [8.5, 9.1]

var sum4 = function sum4(a, b) {
  a + b;
};

console.log(sum4(1, 2)); // undefined

var sum5 = function sum5(a, b) {
  return a + b;
}; //Другой подход


console.log(sum5(1, 2)); // 3
// Чтобы скрытый return сработал должны выполняться следующие условия:
// 1️⃣ Функция должна быть стрелочной.
// 2️⃣ Тело функции должно помещаться на одной линии.
// 3️⃣ Нужно убрать фигурные скобки {} и return.

var isHighRated = function isHighRated(imdbScore) {
  //возвращает true/false
  return imdbScore > 8;
};

var isHighRated2 = function isHighRated2(imdbScore2) {
  return imdbScore2 > 8;
}; //возвращает true/false, тоже самое, на одной и той же строке.


console.log(isHighRated(12));
console.log(isHighRated2(12)); // [12,10,4,2,33,5]

var triple3 = function triple3(value) {
  return value * 3;
};

console.log(triple3(2)); // 6

console.log(triple3(3)); // 9

var multiply = function multiply(multiply1, multiply2) {
  return multiply1 * multiply2;
};

console.log(multiply(2, 4)); // 8

console.log(multiply(3, 3)); // 9

var imdbScores2 = [8.2, 6.3, 8.8, 5.8, 9.1];
var imdbScores3 = [8.2, 6.3, 8.8, 5.8, 9.1];
var getHighRated2 = imdbScores2.filter(function (imdbScore) {
  return imdbScore > 8;
});
var getHighRated3 = imdbScores3.filter(function (imdbScore) {
  return imdbScore > 8;
});
console.log(getHighRated2);
console.log(getHighRated3);
var testnets = ["Ropsten", "Kovan", "Rinkeby", "Goerli"];
var result = testnets.find(function (testnet) {
  return testnet === "Rinkeby";
});
console.log(result);
var testnets2 = ["Ropsten", "Kovan", "Rinkeby", "Goerli"];
var result2 = testnets2.find(function (testnet) {
  return testnet === "Goerli";
});
console.log(result2);
var numbers3 = [1, 2, 3, 4];
var doubled3 = numbers3.map(function (number) {
  return number * 2;
});
console.log(doubled3); // [2, 4, 6, 8]

var getTopRetweets = function getTopRetweets(retweets) {
  return retweets.filter(function (retweet) {
    return retweet > 100;
  });
};

console.log(getTopRetweets([2, 234, 21, 620])); // [234, 620]

console.log(getTopRetweets([234, 47, 157])); // [234, 157]

var getLowRetweets = function getLowRetweets(retweets) {
  return retweets.filter(function (retweet) {
    return retweet < 10;
  });
};

console.log(getLowRetweets([2, 23, 4, 62])); // [2, 4]

console.log(getLowRetweets([34, 7, 15, 0])); // [7, 0]

var getTwitterHandle = function getTwitterHandle(users, searchUser) {
  return users.find(function (user) {
    return user === searchUser;
  });
};

console.log(getTwitterHandle(["@kyled116", "@dhof", "@karl_dot_tech"], "@kyled116")); // "@kyled116"

console.log(getTwitterHandle(["@ukolodny", "@punk4156", "@iamDCinvestor"], "@cdixon")); // undefined

var getUsernameLengths = function getUsernameLengths(users) {
  return users.map(function (user) {
    return user.length - 1;
  });
};

console.log(getUsernameLengths(["@kyled116", "@dhof", "@karl_dot_tech"])); // [8, 4, 13]

console.log(getUsernameLengths(["@ukolodny", "@punk4156", "@iamDCinvestor"])); // [8, 8, 13]

var name = "   Beeple Crap ";
console.log(name.trim()); // "Beeple Crap"

var sentence = "Non-fungible token";
console.log(sentence.startsWith("Non")); // true

console.log(sentence.startsWith("Non-f")); // true

console.log(sentence.startsWith("en")); // false

console.log(sentence.startsWith("token")); // false 

console.log(sentence.endsWith("Non")); // false 

console.log(sentence.endsWith("Non-f")); // false 

console.log(sentence.endsWith("en")); // true

console.log(sentence.endsWith("token")); // true

console.log(sentence.includes("fun")); // true

console.log(sentence.includes("le to")); // true

console.log(sentence.includes("NFT")); // false

console.log(sentence.includes("tokens")); // false

var getTwitterHandle1 = function getTwitterHandle1(twitterHandle) {
  if (twitterHandle.startsWith("@")) {
    return twitterHandle;
  } else {
    return "@" + twitterHandle;
  }
};

console.log(getTwitterHandle1("@kyled116")); // "@kyled116"

console.log(getTwitterHandle1("hasufl")); // "@hasufl"

var getCurrency = function getCurrency(price) {
  if (price.includes("$")) {
    console.log("Доллар");
  } else if (price.includes("€")) {
    console.log("Евро");
  } else {
    console.log("Недоступно");
  }
};

getCurrency("$100"); // "Доллар"

getCurrency("5€"); // "Евро"

getCurrency("30 USD"); // "Недоступно"
//Формирование массива с определенным разделителем из строки

var rollups = "Arbitrum,Optimism,Starkware";
rollups.split(","); // ["Arbitrum", "Optimism", "Starkware"]

console.log(rollups);
var kampai = "За ростовскую братву!";
var replace = kampai.replace(" ", "_"); // "За_ростовскую братву!"

console.log(kampai); // "За ростовскую братву!"

var allreplace = kampai.replaceAll(" ", "_"); // "За_ростовскую_братву!"

console.log(kampai);
console.log(replace);
console.log(allreplace);

var getSlug = function getSlug(title) {
  var string = title.toLowerCase();
  return string = string.substring(0, 15).replaceAll(" ", "-");
};

console.log(getSlug("Shill your bags")); // "shill-your-bags"

console.log(getSlug("Buy the dips")); // "buy-the-dips"

console.log(getSlug("Ignore the FUD")); // "ignore-the-fud"

console.log(getSlug("We are all gonna make it")); // "we-are-all-gonn"

var getTodosNumber = function getTodosNumber(todos) {
  todos = todos.split(",");
  return todos.length;
};

console.log(getTodosNumber("Сдать пластик,Купить капучинатор,Пересадить аглаонему")); // 3

console.log(getTodosNumber("Установить метамаск,Заправить картридж")); // 2

var users = [{
  id: 1,
  name: "Nick Szabo"
}, {
  id: 2,
  name: "Gavin Wood"
}];
var names = users.map(function (user) {
  return user.name;
}); // ["Nick Szabo, Gavin Wood"]

var csv = names.join(", "); // "Nick Szabo, Gavin Wood"

console.log(users);
console.log(names);
console.log(csv); //Работа с формированием html

var html = "<ul>\n  ".concat(users.map(function (user) {
  return "<li>".concat(user.name, "</li>");
}).join(""), " \n</ul>");
console.log(html); //двойной ${${}}

console.log("Практика 71"); //Практика 71

function renderTableRows(rows) {
  var html = "".concat(rows.map(function (row) {
    return "<tr>".concat(row.map(function (r) {
      return "<td>".concat(r, "</td>");
    }).join(""), "</tr>");
  }).join(""), "\n  </tr>");
  console.log(html);
}

renderTableRows([["Bitcoin", 47311], ["Ethereum", 3407], ["Solana", 163], ["Tether", 1]]);

var getDropdown = function getDropdown(currencies) {
  var html = "<option value=\"\">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043B\u044E\u0442\u0443</option>".concat(currencies.map(function (currency) {
    return "<option value=".concat(currency.toLowerCase(), ">").concat(currency, "</option>");
  }).join(""));
  return html;
}; //`<option value=${currency.toLowerCase()}>${currency}</option>`)


console.log(getDropdown(["Bitcoin", "Ethereum", "Tether", "Solana"]));
console.log("После практики");
var levels = [5.6, 6.9, 3.5, 4.7, 6.3]; //Если все элементы соответствуют условию в колбек функции

var allSafe = levels.every(function (lvl) {
  return lvl < 7;
}); // true

var allElevated = levels.every(function (lvl) {
  return lvl > 7;
}); // false

console.log(levels);
console.log(allSafe);
console.log(allElevated); //Если хотя бы один элемент соответствует условию в колбекфункции

var someLow = levels.some(function (lvl) {
  return lvl < 4;
}); // true

var someTooLow = levels.some(function (lvl) {
  return lvl < 3;
}); // false

console.log(someLow);
console.log(someTooLow);

var needOtrabotka = function needOtrabotka(grades) {
  return grades.some(function (grade) {
    return grade < 3;
  });
};

console.log(needOtrabotka([3, 4, 5, 3])); // false

console.log(needOtrabotka([4, 2, 3, 5])); // true

var allFromMoscow = function allFromMoscow(codes) {
  return codes.every(function (code) {
    return code === 495;
  });
};

console.log(allFromMoscow([495, 495, 495])); // true

console.log(allFromMoscow([812, 495, 351])); // false

var scam = ["$ADA", "$XRP", "$EOS"];
scam.length = 0;
console.log(scam); // []

var tokens = ["$UNI", "$LINK", "$DAI"]; // Удаляет первый элемент массива и присваивает его переменной firstItem

var firstItem = tokens.splice(1, 2); //внутри первая переменная (откуда отсчет), вторая переменная количество, splice создает новый массив

console.log(tokens); // ["$LINK", "$DAI"]

console.log(firstItem); // ["$UNI"]

var resetUser = function resetUser(roles) {
  return roles.length = [];
};

var user = ["Admin", "Moderator"];
resetUser(user);
console.log(user); // []

console.log("Практика 76");

var demoteUser1 = function demoteUser1(roles) {
  roles.splice(0, 1);
  return roles;
};

var user2 = ["Admin", "Moderator", "Editor"];
console.log(demoteUser1(user2)); // ["Moderator", "Editor"]

console.log(demoteUser1(user2)); // ["Editor"]

var removeSecondary = function removeSecondary(roles) {
  return roles.splice(0, 1);
};

var user4 = ["Admin", "Moderator", "Editor"];
console.log(removeSecondary(user4)); // ["Admin"]

var nums = [2, 4, 3];
console.log(nums.reduce(function (acc, cur) {
  return acc + cur;
}, 0)); // 9

var nums1 = [10, 2, 2];
console.log(nums1.reduce(function (acc, cur) {
  return acc * cur;
}, 1)); // 40

var nums5 = [10, 5, 15, 20];
var sum6 = nums5.reduce(function (acc, cur) {
  console.log("\u0410\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440: ".concat(acc));
  console.log("\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: ".concat(cur));
  console.log("-----------------------");
  return acc + cur;
}, 0);
console.log("\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0443\u043C\u043C\u0430: ".concat(sum6));
console.log("Punk");
var punks = [3100, 7804, 5217, 8857];
var sum7 = punks.reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(sum7);
console.log("Практика 80");

var sumPunks = function sumPunks(punks) {
  var sumPunk = punks.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  return sumPunk;
};

console.log(sumPunks([3100, 7804, 5217, 8857])); // 24978

console.log(sumPunks([2140, 7252, 2338, 6275])); // 18005

var multiplyPunks = function multiplyPunks(punks) {
  return punks.reduce(function (acc, cur) {
    return acc * cur;
  }, 1);
};

console.log(multiplyPunks([3100, 7804])); // 24192400

console.log(multiplyPunks([2140, 7252, 2338])); // 36284076640
// const block10 = [13335416, 355]
// const blockHeight = block10[0]
// const totalTxs = block10[1]
// console.log(blockHeight) // 13335416
// console.log(totalTxs) // 355
//Тот же самый код с использованием деструктуризации

var block10 = [13335416, 355]; //[]= - деструктуризация

var blockHeight = block10[0],
    totalTxs = block10[1];
console.log(blockHeight); // 13335416

console.log(totalTxs); // 355

function App() {
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];

  return null;
}

var getBlockReport = function getBlockReport(block) {
  // Деструктурируйте blockHeight и totalTxs
  var _block = _slicedToArray(block, 2),
      blockHeight = _block[0],
      totalTxs = _block[1];

  return "\u0411\u043B\u043E\u043A \u043D\u043E\u043C\u0435\u0440 ".concat(blockHeight, " \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 ").concat(totalTxs, " \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439.");
};

console.log(getBlockReport([9585604, 110])); // "Блок номер 9585604 содержит 110 транзакций."

console.log(getBlockReport([12585603, 185])); // "Блок номер 12585603 содержит 185 транзакций."

var getMinerInfo = function getMinerInfo(block) {
  var _block2 = _slicedToArray(block, 2),
      name = _block2[0],
      time = _block2[1];

  return "\u042D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u0437\u0430\u043C\u0430\u0439\u043D\u0438\u043B ".concat(name, " \u0437\u0430 ").concat(time, " \u0441\u0435\u043A\u0443\u043D\u0434.");
};

console.log(getMinerInfo(["Nanopool", 25])); // "Этот блок замайнил Nanopool за 25 секунд."

console.log(getMinerInfo(["Ethermine", 11])); // "Этот блок замайнил Ethermine за 11 секунд."

var weapon = ["Wand of Vitriol"];
var chest = ["Dragonskin Armor"];
var gear = [].concat(weapon, chest); //Конкатенация массивов (склеивание с помощью ...)

console.log(gear);
var loot = ["Amulet of Reflection", "Helm of Fury"];
var extraLoot = [].concat(loot, ["Pandemonium Moon Demon Husk of Detection"]);
console.log(extraLoot); // ["Amulet of Reflection", "Helm of Fury", "Pandemonium Moon Demon Husk of Detection"]

var joinAssets = function joinAssets(wallet1, wallet2) {
  return [].concat(_toConsumableArray(wallet1), _toConsumableArray(wallet2));
};

console.log(joinAssets(["21 IFY", "18 AAVE"], ["32 MATIC", "73 CRV"])); // ["21 IFY", "18 AAVE", "32 MATIC", "73 CRV"]

console.log(joinAssets(["8 DAI", "59 GTC"], ["5 DYDX", "46 SHIB"])); // ["8 DAI", "59 GTC", "5 DYDX", "46 SHIB"]