//  sales data
// create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document.

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// get table from HTML so we can add rows
const table = document.getElementById("salesData");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//get from the internet - to get rand for js between min and max
//math.floor - makes it a whole number

function Sales(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
}

Sales.prototype.calculateSales = function () {
  //this.calculateSales()
  for (let i = 0; i < hours.length; i++) {
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);

    //number of cookies sold this hour
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);

    //increase total cookies by adding this hours sales to it
    this.totalCookiesSold = this.totalCookiesSold + hourCookiesSold;
  }
};

Sales.prototype.render = function () {
  //calculate sales data before rendering it
  this.calculateSales();
  //create a row
  const tr = document.createElement("tr");

  //add store name to the row
  const th = document.createElement("th"); //table data
  th.textContent = this.location;
  tr.appendChild(th); //th - header

  //add this stores data to that row  -for loop
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    //create a new td and put the sales number in it
    const td = document.createElement("td"); //table data
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  // add the total to the end of the row
  const totalTd = document.createElement("td");
  totalTd.textContent = this.totalCookieSold;
  tr.appendChild(totalTd);

  //add that row to the table
  table.appendChild(tr);
};

const stores = [
  new Sales("Seattle", 23, 65, 6.3),
  new Sales("Tokyo", 3, 24, 1.2),
  new Sales("Dubai", 11, 38, 3.7),
  new Sales("Paris", 20, 38, 2.3),
  new Sales("Lima", 2, 16, 4.6),
];

// header row - function that renders row with the hours in
// create tr
const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

//add each time in a th
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}

//add total heading
const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

// add the row to the table
table.appendChild(headerRow);

// render each store on the page
for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}

//get the form DOM mode- to add another location
const form = document.querySelector("form");

//add event listener to the form
form.addEventListener("submit", function (event) {
  //prevent the page from reloading
  event.preventDefault();

  //get users inputs
  const location = event.target.location.value;
  const min = event.target.min.value;
  const max = event.target.max.value;
  const avg = event.target.avg.value;

  //create a new Sales
  //turn string into numbers so it returns a number - use plus
  const newStore = new Sales(location, +min, +max, +avg);

  //render the new Sales
  newStore.render();
  renderTotalRow();

  //already ran calculateSales func in render
});

//footerRow
//form - display info on page when user clicks the button

/*
THIS IS THE MOST COMPLEX BIT OF JS WE'VE DONE SO FAR
*/

// create a total row
function renderTotalRow() {
  // delete old totalRows
  const oldTr = document.getElementById("totalrow");
  oldTr?.remove();
  // ? = its won't run .remove() if oldTr is null (meaning it isn't on the page)

  // make a new tr
  const tr = document.createElement("tr");
  tr.setAttribute("id", "totalrow");

  // add a "total row" heading
  const th = document.createElement("th");
  th.textContent = "Hourly Total";
  tr.appendChild(th);

  // loop round the hours
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    // within each iteration of the hours loop:
    for (let k = 0; k < stores.length; k++) {
      // loop the stores array and get only that hours data
      hourlyTotal = hourlyTotal + stores[k].cookiesPerHour[i];
      // or -> hourlyTotal += stores[k].cookiesPerHour[i];
    }

    // add the hourly total td to the row
    const td = document.createElement("td");
    td.textContent = hourlyTotal;
    tr.appendChild(td);
  }

  // add the tr to the table
  table.appendChild(tr);
}

renderTotalRow();
