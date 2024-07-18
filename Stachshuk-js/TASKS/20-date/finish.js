/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const newData = new Date()

const newDataInMs = newData.getTime()

console.log(newDataInMs)