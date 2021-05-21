// from data.js
let tableData = data;

let form = d3.select('form');

form.on('submit', event => {
  d3.event.preventDefault();
  let date = d3.select('#datetime').property('value');
  if (date) {
    let filteredData = tableData.filter(obj => obj.datetime === date);
    let rows = createRows(filteredData);
    updateDOM(rows);
  };
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
  d3.select('tbody').html(html);
};

updateDOM(createRows(tableData));