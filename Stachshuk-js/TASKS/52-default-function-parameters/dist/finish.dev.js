"use strict";

/** ЗАДАЧА 52 - Параметры функции по умолчанию
 *
 * 1. Создайте функцию "weatherForecast" с двумя параметрами "city" и "weather"
 *
 * 2. Если второй аргумент отсутствует,
 * параметр "weather" должен получить значение "Отличная погода!"
 *
 * ВАЖНО:
 *  - Сначала решите это БЕЗ параметра функции по умолчанию
 *  - Закомментируйте предыдущее решение
 * и решите ту же задачу с параметром функции по умолчанию
 *
 * ПРИМЕЧАНИЕ:
 * Внимательно сравните свои результаты с результатами тестовых вызовов
 */
var weatherForecast = function weatherForecast(city, weather) {
  if (weather === undefined) {
    weather = "Отличная погода!";
  }

  return "\u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u043F\u043E\u0433\u043E\u0434\u044B \u0434\u043B\u044F \u0433\u043E\u0440\u043E\u0434\u0430 ".concat(city, ": ").concat(weather);
};

console.log(weatherForecast('Dubai', 'Солнечно')); // Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь')); // Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris')); // Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', '')); // Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined)); // Прогноз погоды для города Las Vegas: Отличная погода!