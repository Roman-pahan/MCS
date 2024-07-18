"use strict";

/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */
var personInfo = function personInfo(obj) {
  var name = obj.name,
      personAge = obj.age,
      _obj$location = obj.location,
      origin = _obj$location.country,
      homeCity = _obj$location.city,
      _obj$friendsQty = obj.friendsQty,
      friendsQty = _obj$friendsQty === void 0 ? 0 : _obj$friendsQty,
      _obj$createdAtYear = obj.createdAtYear,
      createdAtYear = _obj$createdAtYear === void 0 ? new Date().getFullYear() : _obj$createdAtYear;
  return {
    name: name,
    personAge: personAge,
    origin: origin,
    homeCity: homeCity,
    friendsQty: friendsQty,
    createdAtYear: createdAtYear
  };
};

var person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London'
  }
};
var result = personInfo(person);
console.log(result);
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/