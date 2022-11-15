/*

Напишите функцию getDropdown. Она должна возвращать HTML-код, который вставится как содержимое внутрь элемента <option></option>, находящегося в index.html.

Возвращаемый из getDropdown HTML-код должен:
1. Начинаться с <option value="">Выберите валюту</option>
2. Далее, для каждой криптовалюты в массиве currencies должен рендериться элемент <option>. Например, для "Ethereum" должно возвращаться <option value="ethereum">Ethereum</option>.

*/

export function getDropdown(currencies) {
  let html = `<option value="">Выберите валюту</option>`
  currencies.forEach(function (currency){
    html += `<option value=${currency.toLowerCase()}>${currency}</option>`;
  })
  return html;
}
