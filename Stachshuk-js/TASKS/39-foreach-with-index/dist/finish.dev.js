"use strict";

/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */
var myCities = ['London', 'New York', 'Singapore']; // const cityInfo = (cities) =>{
//     cities.forEach((city,index) => {
//        return console.log(`${city} is at the index ${index} in the myCities array`) 
//     }); 
// } 
// cityInfo(myCities)

var cityInfo = function cityInfo(_ref) {
  var city = _ref.city,
      index = _ref.index;
  return "".concat(city, " is at the index ").concat(index, " in the myCities array");
};

myCities.forEach(function (city, index) {
  return console.log(cityInfo({
    city: city,
    index: index
  }));
});