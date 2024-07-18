"use strict";

/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */
// let counter =0;
// function counterFn(){    
//     counter++
//     console.log(`Сообщение номер ${counter}`)
//     if(counter >= 5){
//         clearInterval(intervalId)
//     }
// }
// let intervalId = setInterval(counterFn, 2000);
var i = 1; // Инициализация переменной i

var messageIntervalId = setInterval(function () {
  console.log('Сообщение номер ' + i);
  i = i + 1;
}, 2000);
setTimeout(function () {
  clearInterval(messageIntervalId);
}, 11000); // Остановка интервала через 10 секунд