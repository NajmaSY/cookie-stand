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

const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    //2 functions in one
    //calculates cust and cookies per hour
    //method in object
    //add a random number to custPerHour array - for loop runs 14 times
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      //get ran between min/max
      this.customersPerHour.push(randNum);
      //push into customersPerHour array
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      //times by 6.3 and push into cPH
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

const tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

const dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

const paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

const lima = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

seattle.calculateSales();
tokyo.calculateSales();
dubai.calculateSales();
paris.calculateSales();
lima.calculateSales();

// get element on the page with id salesData
const salesData = document.getElementById("salesData");

// add title for the seattle
const seattleH2 = document.createElement("h2");
seattleH2.textContent = seattle.location;
//get seattle from property
salesData.appendChild(seattleH2);

//createlist - cookies sold each hour
const seattleUl = document.createElement("ul");
//for loop - each new list item - li
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  //set it to 6am: 50 cookies;
  seattleUl.appendChild(li);
}

salesData.appendChild(seattleUl);

// add the title for the tokyo
const tokyoH2 = document.createElement("h2");
tokyoH2.textContent = tokyo.location;
salesData.appendChild(tokyoH2);

// create a list to show the cookies sold at each hour
const tokyoUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoUl.appendChild(li);
}

salesData.appendChild(tokyoUl);

//dubai
const dubaiH2 = document.createElement("h2");
dubaiH2.textContent = dubai.location;
//get seattle from property
salesData.appendChild(dubaiH2);

//createlist - cookies sold each hour
const dubaiUl = document.createElement("ul");
//for loop - each new list item - li
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]} cookies`;
  //set it to 6am: 50 cookies;
  dubaiUl.appendChild(li);
}

salesData.appendChild(dubaiUl);

//dubai
const parisH2 = document.createElement("h2");
parisH2.textContent = paris.location;
//get seattle from property
salesData.appendChild(parisH2);

//createlist - cookies sold each hour
const parisUl = document.createElement("ul");
//for loop - each new list item - li
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${paris.cookiesPerHour[i]} cookies`;
  //set it to 6am: 50 cookies;
  parisUl.appendChild(li);
}

salesData.appendChild(parisUl);

//lima
const limaH2 = document.createElement("h2");
limaH2.textContent = lima.location;
//get seattle from property
salesData.appendChild(limaH2);

//createlist - cookies sold each hour
const limaUl = document.createElement("ul");
//for loop - each new list item - li
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${lima.cookiesPerHour[i]} cookies`;
  //set it to 6am: 50 cookies;
  limaUl.appendChild(li);
}

salesData.appendChild(limaUl);
