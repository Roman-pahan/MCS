"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** ЗАДАЧА 53 - Сокращенное написание свойств объектов
 * 
 * 1. Исправьте все ошибки в коде.
 * 
 * 2. Измените объект, возвращаемый функцией "photosGallery", используя:
 *  - Сокращенные имена свойств
 *  - Сокращенные имена методов
 *  - Также нужно изменить одно свойство объекта
 * и сделать его вычисляемым свойством
 * 
 * 3. Сообщения в консоли должны быть точно такими же, 
 * как и в конце этой задачи
 */
var photosGallery = function photosGallery(title, dimensions, date) {
  var _ref;

  return _ref = {
    title: title,
    date: date
  }, _defineProperty(_ref, dimensions, true), _defineProperty(_ref, "info", function info() {
    console.log("\u0424\u043E\u0442\u043E \"".concat(title, "\" \u0438\u043C\u0435\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 ").concat(dimensions));
  }), _defineProperty(_ref, "publishInfo", function publishInfo() {
    console.log("\u0424\u043E\u0442\u043E \"".concat(title, "\" \u0431\u044B\u043B\u043E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E ").concat(Math.floor((new Date().getTime() - date.getTime()) / 1000), " \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434"));
  }), _ref;
};

var myDogPhoto = photosGallery("My dog", "1920x1080", new Date());
var testDimension1 = "1920x1080";
var testDimension2 = "1080x720";
myDogPhoto.info();
/* Фото "My dog" имеет разрешение 1920x1080 */

setTimeout(function () {
  return myDogPhoto.publishInfo();
}, 2000);
/* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
к параметрам функции "photosGallery" (например "date")? */

console.log(myDogPhoto[testDimension1]); // true

console.log(myDogPhoto[testDimension2]); // undefined
// console.log(myDogPhoto.dimensions === testDimension1) // true
// console.log(myDogPhoto.dimensions === testDimension2) // undefined

console.log(Object.keys(myDogPhoto));
Object.keys(myDogPhoto).forEach(function (key) {
  console.log(myDogPhoto[key]);
});