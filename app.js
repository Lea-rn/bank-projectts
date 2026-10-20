///mardi ==> 17h:30
//// jeudi ==> 19h
//// dimanche ==> 19h:30

"use strict";

///// dummy data ::
const account1 = {
  owner: "Mark Schmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

////

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

const inComes = document.querySelector(".average-in");
const outMoney = document.querySelector(".average-out");
const interest = document.querySelector(".average-interest");

const userNameInput = document.querySelector(".user");
const pinInput = document.querySelector(".pin");
const btnLogin = document.querySelector(".btn-login");
const welcomeMessage = document.querySelector(".welcome");
const app = document.querySelector("main");
const transfertUser = document.querySelector(".transfert-input");
const amoutToTransfert = document.querySelector(".amount-transfert-box-input");
const transfertButton = document.querySelector(".btn-transfert-box");
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
const displayUserName = function (arr) {
  arr.forEach((person) => {
    person.userName = person.owner
      .toLowerCase()
      .split(" ")
      .map((ele) => ele[0])
      .join("");
  });
};

displayUserName(accounts);

///// display summary functionnality ::

const calcDisplaySummary = function (cur) {
  const inc = cur.movements
    .filter((ele) => ele > 0)
    .reduce((acc, num) => acc + num, 0);
  //// u.u.i :
  inComes.textContent = inc;
  const outc = cur.movements
    .filter((ele) => ele < 0)
    .reduce((acc, ele) => ele + acc, 0);

  /// u.u.i :
  outMoney.textContent = Math.abs(outc);

  const int = cur.movements
    .filter((mov) => mov > 0)
    .map((deposit, i, arr) => {
      // console.log(arr);
      return (deposit * cur.interestRate) / 100;
    })
    .filter((ele, x, y) => {
      // console.log(y);
      return ele > 1;
    })
    .reduce((acc, ele) => acc + ele, 0);
  // console.log(int);

  ///// u.u.i :
  interest.textContent = int;
};

// calcDisplaySummary(account3.movements, account3.interestRate);

///// display movements  :::

const displayMovements = function (cur) {
  movementsContainer.innerHTML = "";

  cur.movements.forEach(function (mov, i) {
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

// displayMovements(account3.movements);

////// display blance :::

const displayBalance = function (cur) {
  const balance = cur.movements.reduce((acc, ele) => acc + ele, 0);
  ///// update ui ::
  balanceAccount.textContent = balance;
  cur.credit = balance;
};

function updateUi(current) {
  displayMovements(current);
  displayBalance(current);
  calcDisplaySummary(current);
}

// displayBalance(account3.movements);

////////// authentication functionnality
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); ////// delete par default (auto reload)
  currentAccount = accounts.find((acc) => acc.userName === userNameInput.value);
  console.log("current :", currentAccount);
  if (currentAccount.pin === Number(pinInput.value)) {
    welcomeMessage.textContent = `welcome back ${currentAccount.owner.split(" ")[0]}`;
    app.style.opacity = 1;
    //// u.u.i
    updateUi(currentAccount);
    userNameInput.value = "";
    pinInput.value = "";
  } else {
    alert("wrong email or password !!!");
  }
});

/////// transfert  functionality :::
//// conditions :::
//// balance >= amount && receiver should be true && amount > 0
///// && current account should be defrent of reciever

transfertButton.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(amoutToTransfert.value);
  const balance = currentAccount.credit;
  const reciever = accounts.find((acc) => acc.userName === transfertUser.value);

  if (
    balance >= amount &&
    reciever &&
    amount > 0 &&
    currentAccount.userName !== reciever.userName
  ) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
    ///// u.u.i
    updateUi(currentAccount);
    ////
    transfertUser.value = amoutToTransfert.value = "";
  }
});

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

////// split (string ==> array)
///// join (array ==> string)

// const user = "Park Thomas Williams"; /// ptw

// const result = user
//   .toLowerCase()
//   .split(" ")
//   .map((ele) => ele[0])
//   .join("");
// console.log(result);

// const userName = user.toLowerCase();
// console.log(userName); //// park thomas williams
// const userName1 = userName.split(" ");
// console.log(userName1); /// ["park","thomas","williams"]
// const userName2 = userName1.map((nom) => nom[0]);
// console.log(userName2); //// ["p","t","w"]
// const result = userName2.join("");
// console.log(result); //// ptw

//////// find :::

// const numbers = [10, 20, 26, 30, 40, 20];

// const result = numbers.find((ele) => ele > 10);

// console.log(result);

// if (result) {
//   console.log("alert ");
// }

// const dataBase = [
//   {
//     userName: "peter",
//     photo: "picture1",
//     coins: 100,
//   },

//   {
//     userName: "mark",
//     photo: "picture2",
//     coins: 200,
//   },
//   {
//     userName: "nicole",
//     photo: "picture3",
//     coins: 300,
//   },
// ];

// const winner = dataBase.find((person) => person.coins === 200);
// console.log(winner);

/////// indexOf() ;
// const arr = [1, 22, 4];

// const result = arr.indexOf(222);
// console.log(result);

// function findNumber(num, arr) {
//   if (arr.indexOf(num) === -1) {
//     console.log(`${num} is not found !!!`);
//   } else {
//     console.log(`${num} is a grate number`);
//   }
// }
// findNumber(92, arr);

//// findIndex () ::

// const index = arr.findIndex((ele) => ele === 1);
// console.log(index);

///// includes () :::
// const numbers = [20, 22, 50, 100, 150];
// console.log(numbers.includes(110));

////// some ::

// const numbers = [20, 22, 50, 100, 150];

// const result = numbers.some((ele) => ele > 150); ////
// console.log(result);

// const customers = [
//   {
//     name: "asma",
//     hours: 160,
//   },

//   {
//     name: "youssef",
//     hours: 100,
//   },

//   {
//     name: "zina",
//     hours: 120,
//   },

//   {
//     name: "mohamed",
//     hours: 200,
//   },
//   {
//     name: "awatef",
//     hours: 150,
//   },
// ];

// const test = customers.some((ele) => ele.hours < 150);

// if (test) {
//   alert("fama chkoun may7ebech yekhdem");
// }

//////// every ::

const numbers = [20, 22, 50, 100, 150];

const result = numbers.every((ele) => ele > 50);
console.log(result);
