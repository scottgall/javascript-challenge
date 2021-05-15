// from data.js
let tableData = data;

let form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  let date = document.querySelector('#datetime').value;
  let filteredData = tableData.filter(obj => obj.datetime === date);
  let rows = createRows(filteredData);
  updateDOM(rows);
});

let createRows = (data) => {
  return data.reduce((prev, cur) => {
    return prev + `<tr>
                    <td>${cur.datetime}</td>
                    <td>${cur.city}</td>
                    <td>${cur.state}</td>
                    <td>${cur.country}</td>
                    <td>${cur.shape}</td>
                    <td>${cur.durationMinutes}</td>
                    <td>${cur.comments}</td>
                  </tr>`
  }, '')
};

let updateDOM = (html) => {
  document.querySelector('tbody').innerHTML = html;
};

updateDOM(createRows(tableData));
