//  sales data
// create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document.

// display the lists on sales.html

//each object location should have
// Location:
// Min/Cust:
// Max/Cust:
// Ave Cookie/Sale:

// Store the min/max hourly customers, and the average cookies per customer, in object properties.

//array of working hours - 14 in a day

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
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);

    this.cookiesPerHour.push(hourCookiesSold);

    this.totalCookiesSold = this.totalCookiesSold + hourCookiesSold;
    //console.log(this.totalCookiesSold);
  }
};

Sales.prototype.render = function () {
  this.calculateSales();
  //create a row
  const tr = document.createElement("tr");

  //add store name to the row
  const th = document.createElement("th"); //table data
  th.textContent = this.location;
  tr.appendChild(th); //th - header

  //salesData.appendChild(tr);
  //add this stores data to that row  -for loop
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    //create a new td and put the sales number in it
    const td = document.createElement("td"); //table data
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  // add the total to the end of the row
  const totalTd = document.createElement("td");
  totalTd.textContent = Math.floor(this.totalCookieSold);
  tr.appendChild(totalTd);
  table.appendChild(tr);
};

const seattle = new Sales("Seattle", 23, 65, 6.3);
const tokyo = new Sales("Tokyo", 3, 24, 1.2);
const dubai = new Sales("Dubai", 11, 38, 3.7);
const paris = new Sales("Paris", 20, 38, 2.3);
const lima = new Sales("Lima", 2, 16, 4.6);

// header - function that renders row with the hours in
// change css - every td, th is same width
// totals
//add that row to that table

const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

//add each time in a th
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}

// table.appendChild(headerRow)

//total heading
const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

// add the row to the table
headerRow.appendChild(totalHeading);
table.appendChild(headerRow);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

//form

const form = document.getElementById("locationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = event.target.location.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const avgCookiesPerCust = event.target.avgCookiesPerCust.value;

  const newLocation = new Sales(location, minCust, maxCust, avgCookiesPerCust);
  newLocation.render();
});
