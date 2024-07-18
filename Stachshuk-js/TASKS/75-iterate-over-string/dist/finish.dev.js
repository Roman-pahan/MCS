"use strict";

/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */
var vowelsCount = 0;
var amountOfIter = 0;
var vowels = ['a', 'e', 'i', 'o', 'u'];
var str = 'Today is the best day of my life'; // Напишите код здесь
//  function countMatch(letters, sentence){
//    return letters.reduce((acc, letter) => {
//         for (let i=0; i < sentence.length; i++){
//             if(sentence[i] === letter){
//                 acc+=1
//             }
//         }
//         return vowelsCount = acc;
//     },0)
// }
// countMatch(vowels,str);

str.split("").forEach(function (_char) {
  amountOfIter += 1;
  console.log("\u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044F \u2116: ".concat(amountOfIter));

  if (vowels.includes(_char)) {
    vowelsCount += 1;
  }
});
console.log(str.length);
console.log(vowelsCount); // 9