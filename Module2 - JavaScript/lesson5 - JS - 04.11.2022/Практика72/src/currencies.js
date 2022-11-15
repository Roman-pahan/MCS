/*

Функция getDropdown должна возвращать HTML, который вставится внутрь <option></option>.

Возвращаемый из getDropdown HTML-код должен:
1. Начинаться с <option value="">Выберите валюту</option>
2. Далее, для каждой криптовалюты в массиве currencies должен рендериться элемент <option>. Например, для "Ethereum" должно возвращаться <option value="ethereum">Ethereum</option>.

*/

export const getDropdown = (currencies) => {
  const html = `<option value="">Выберите валюту</option>${currencies
    .map(
      (currency) =>
        `<option value=${currency.toLowerCase()}>${currency}</option>`
    )
    .join("")}`;
  return html;
};
