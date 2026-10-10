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

const balanceAccount = document.querySelector(".balance");

///// display movements  :::
//  [430, 1000, 700, 50, 90],
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

////// display blance :::

const displayBalance = function (arr) {
  const balance = arr.reduce((acc, ele) => acc + ele, 0);
  ///// update ui ::
  balanceAccount.textContent = balance;
};

displayBalance(account4.movements);

/////////////////////////////// lecture///////////////////////////////////////////// ::::

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

// const euro = [100, 50, 10, 25];

// console.log("euro :", euro);

// const toTunisanDinar = 3.35;

// const dinar = euro.map((ele) => ele * toTunisanDinar);

// console.log("dinar", dinar);

///// filter  ::

// const x = [3, 1, 4, 3, 2];
// console.log(x);

// const numbresGreaterThanTwo = x.filter((ele) => ele > 2);

// console.log(numbresGreaterThanTwo);

///// for loop ::
// const x = [3, 1, 4, 3, 2];
// console.log(x);

// const numbresGreaterThanTwo = [];

// for (let i = 0; i < x.length; i++) {
//   if (x[i] > 2) {
//     numbresGreaterThanTwo.push(x[i]);
//   }
// }

// console.log(numbresGreaterThanTwo);

/////// reduce :::

// const x = [3, 1, 4, 3, 2];

// const sum = x.reduce((acc, num, i) => acc + num, 0);

///// 0 + 3 = 3 ; 3 + 1 = 4 ; 4 + 4 = 8 ; 8 + 3 = 11 ; 11 + 2 = 13
// console.log(sum);

// const multiple = x.reduce((acc, num) => acc * num, 1);

// console.log(multiple);

// const x = [2, 30, 1, 4, 50, 2];

///// get max using reduce :

// const max = x.reduce((acc, ele) => {
//   if (acc > ele) {
//     return acc;
//   } else return ele;
// }, x[0]);

// console.log(max);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// const euroToDinar = 3.3;

//// sum of deposit on tunisian dinar ..

// const positiveMovements = movements.filter((ele) => ele > 0);
// console.log(positiveMovements);
// const toDinar = positiveMovements.map((ele) => ele * euroToDinar);
// console.log(toDinar);

// const sum = toDinar.reduce((acc, ele) => acc + ele, 0);

// console.log(sum);

////// chaining , pipeline  :::

// const sum = movements
//   .filter((ele) => ele > 0)
//   .map((ele) => ele * euroToDinar)
//   .reduce((acc, ele) => acc + ele, 0);
// console.log(sum);
