"use strict";

///// dummy data ::
const account1 = {
  owner: "Mark Schmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, 150, -790, -3210, 1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Park Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 100, -400],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

///// import elements ::

const movementsContainer = document.querySelector(".left");

///// display movements  :::

const displayMovements = function (arr) {
  movementsContainer.innerHTML = "";

  arr.forEach(function (mov, i) {
    let type = mov > 0 ? "deposit" : "withdraw";

    let html = `
          <div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}">${i + 1} ${type}</span>
              <span>3 DAYS AGO</span>
            </div>
            <p class="${type}-amount">
              ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
    `;

    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account4.movements);

//////// lecture ::::

///
// const numbers = [3, 1, 4, 3, 2];

// function double(arr) {
//   const x = [];

//   arr.forEach((ele) => {
//     x.push(ele * 2);
//   });
//   return x;
// }
// console.log(numbers);   //
// console.log(double(numbers));

// console.log(numbers);
// const double = numbers.map((ele) => ele * 2);
// console.log(double);

//////  higher order function == > method array + parameter had callback function (anonymos function) ,

const euro = [100, 50, 10, 25];

console.log("euro :", euro);

const toTunisanDinar = 3.35;

const dinar = euro.map((ele) => ele * toTunisanDinar);

console.log("dinar", dinar);
