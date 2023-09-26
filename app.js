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

/*
for (let i = 0; i < hours.length; i++) {
  const hourCustomers = randomNumber(this.minCust, this.maxCust);
  this.customersPerHour.push(hourCustomers);
  const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
  this.cookiesPerHour.push(hourCookiesSold);
  this.totalCookiesSold = this.totalCookiesSold + hourCookiesSold;
  console.log(this.totalCookiesSold);
}
*/

Sales.prototype.render = function () {
  for (let i = 0; i < hours.length; i++) {
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);

    this.cookiesPerHour.push(hourCookiesSold);

    this.totalCookiesSold = this.totalCookiesSold + hourCookiesSold;
    console.log(this.totalCookiesSold);
  }

  const salesData = document.getElementById("salesData");

  const table = document.createElement("table");
  salesData.appendChild(table);

  const tr = document.createElement("tr");
  tr.textContent = this.hours;
  salesData.appendChild(tr);

  const td = document.createElement("td");
  td.textContent = this.location;
  tr.appendChild(td);

  // salesData.appendChild(table);

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement("th");
    th.textContent = this.cookiesPerHour[i];
    tr.appendChild(th);
  }
  // add another li to ul that has the totals as text content
  const th = document.createElement("th");
  th.textContent = `total ${this.totalCookiesSold}`;
  tr.appendChild(th);
  //salesData.appendChild(td);
};

const seattle = new Sales("Seattle", 23, 65, 6.3);
const tokyo = new Sales("Tokyo", 3, 24, 1.2);
const dubai = new Sales("Dubai", 11, 38, 3.7);
const paris = new Sales("Paris", 20, 38, 2.3);
const lima = new Sales("Lima", 2, 16, 4.6);

// header - function that renders row with the hours in
// change css - every td, th is same width
// totals

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// replace lists for each store with a single table
// coloumn: hours 6:00am, 7:00am etc...
// row: Daily Location Total (cookiesPerHour): Seattle, Tokyo etc...
//each cookie stand loacation should have a separate render() method that creates and appends its row to the table
