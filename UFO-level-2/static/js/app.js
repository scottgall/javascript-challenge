// from data.js
let tableData = data;

let form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  let filterObj = {};
  
  let date = document.querySelector('#datetime').value;
  if (date) filterObj.datetime = date;
  let city = document.querySelector('#city').value;
  if (city) filterObj.city = city.toLowerCase();
  let state = document.querySelector('#state').value;
  if (state) filterObj.state = state.toLowerCase();
  let country = document.querySelector('#country').value;
  if (country) filterObj.country = country.toLowerCase();
  let shape = document.querySelector('#shape').value;
  if (shape) filterObj.shape = shape.toLowerCase();
  
  let filteredData = filterData(filterObj);
  let rows = createRows(filteredData);
  
  updateDOM(rows);
});

let filterData = (obj) => {
  let filtered = tableData;
  for (const [key, value] of Object.entries(obj)) {
    filtered = filtered.filter(obj => obj[key] === value);
  }
  return filtered;
}

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
  }, '');
};

let updateDOM = (html) => {
  document.querySelector('tbody').innerHTML = html;
};

updateDOM(createRows(tableData));