/* На основе параметра rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

export function renderTableRows(rows) {
  const html = `${rows
    .map((row) => `<tr>${row.map((r) => `<td>${r}</td>`).join("")}</tr>`)
    .join("")}
  </tr>`;
  return html;
}
