"use strict";

// const getFirstCall = tx3 => {
//     return tx3.receipt?.calls?.[0]
//   }
var auto = {
  brand: 'Tesla',
  model: 'ModelX' // details: {
  //     color: 'красный',
  //     year: 2021,
  //     atStock: true
  // }

};
var cars = [auto];
cars.forEach(function (car) {
  console.log("".concat(car.brand, " ").concat(car.details.year, ": \u0446\u0432\u0435\u0442 - ").concat(car.details.color));
});