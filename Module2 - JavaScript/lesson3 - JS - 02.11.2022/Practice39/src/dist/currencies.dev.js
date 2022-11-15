"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDropdown = getDropdown;

/*

Напишите функцию getDropdown. Она должна возвращать HTML-код, который вставится как содержимое внутрь элемента <option></option>, находящегося в index.html.

Возвращаемый из getDropdown HTML-код должен:
1. Начинаться с <option value="">Выберите валюту</option>
2. Далее, для каждой криптовалюты в массиве currencies должен рендериться элемент <option>. Например, для "Ethereum" должно возвращаться <option value="ethereum">Ethereum</option>.

*/
function getDropdown(currencies) {
  console.log(currencies);
  currencies.forEach(function (currency) {
    return currency;
  });
}