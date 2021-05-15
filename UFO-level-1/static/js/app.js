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
  html = '';
  data.forEach(obj => {
    html += `<tr>
              <td>${obj.datetime}</td>
              <td>${obj.city}</td>
              <td>${obj.state}</td>
              <td>${obj.country}</td>
              <td>${obj.shape}</td>
              <td>${obj.duration}</td>
              <td>${obj.comments}</td>
            </tr>`
  });
  return html;
};

let updateDOM = (html) => {
  document.querySelector('tbody').innerHTML = html;
};

updateDOM(createRows(tableData));

