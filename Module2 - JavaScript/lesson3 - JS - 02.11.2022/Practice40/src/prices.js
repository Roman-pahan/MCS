/* Для каждого ряда, полученного в параметре rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

export function renderTableRows(rows) {
  let html = "";
  rows.forEach(function (row) {
    html += `<tr>`;
    row.forEach(function (column) {
      html += `<td>${column}</td>`;
    });
    html += `</tr>`;
  });

  console.log(html);
  return html;
}
