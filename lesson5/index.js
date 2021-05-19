//Modern JavaScript
//ES6 = EcmaScript 2016

//npm - node package manager

//variables: let const
//Hoisting
// {
//     let var1 = 3
// }
// console.log(var1);

// const person = {
//   name: "eugene",
//   age: 78,
//   skills: ["html", "css", "js"],
// };

// person.skills = [];
// person.name = "max";
// console.log(person);

// const array = [1, 2, 3];
// console.log(array);
// array.push(4);
// console.log(array);

// if (true) {
//   const age = 89;
//   age = 45;
//   age = " 78";
//   age = [];
//   console.log(age);
// }
// console.log(age);

//scope
// this = Window - глобальный объект
// console.log(this.document.getElementById("h1").innerText);

//arrow functions

// console.log(isEven(2));

//dec - is hoisted
// function isEven(number) {
//     return number % 2 === 0;
// }

//expr - is NOT hoisted
// var isEven = function (number) {
//     return number % 2 === 0;
// };

// const isEven = (number) => number % 2 === 0;
// console.log(isEven(2));
// console.log([1, 2, 3, 4, 5].filter((number) => number % 2 === 0));

// const man = {
//   age: 34,
//   showThis: function () {
//     console.log(this.age);
//   },
//   showThisArrow: (a, b) => {
//     console.log(this.age);
//     console.log(a);
//     console.log(b);
//   },
// };

// const Logger = () => {
//   console.log(this);
// };

// const LoggerLog = Logger.bind({a:1, b: "qwerty"})
// LoggerLog()

// man.showThisArrow()

//bind, call, apply
// man.showThis.bind({age: 50})()
// console.log("man");
// man.showThisArrow.apply(man, [1, 2]);
// man.showThisArrow.call(man, 1, 2);
// Logger.call({});

// console.log(Math.max.apply(null, [1, 2, 25, 3]));
// const isEven

//default params
// function triangle(height, sym = "*") {
//   for (let i = 0; i < height; i++) {
//     console.log(sym.repeat(i + 1));
//   }
// }

// triangle(5)
// // triangle(7, '#')

// const emptyBag = [];
// const getEmptyBag = () => [];

// purchase(5);

//template strings

const numbers = [18881, 1, 5846548, 3, 5, 8, 13];

// const string = `
// <ul>
// ${numbers.map((number) => `<li> Item #${number}</li>`).join('')}
// </ul>
// `;
// document.getElementsByTagName('body')[0].innerHTML = string
// console.log(string);

//rest spread

//rest
function purchase(userId, discont, ...bag) {
  for (const item of bag) {
    console.log(
      "User " + userId + " order " + item + " price discounted by " + discont
    );
  }
}

purchase(5, "25%", "shirt", "a", "b", "c");

//destructuring
const [firstNum, , , thirdNum] = [...numbers];
console.log(Math.max(...numbers));
// console.log(firstNum);
// console.log(thirdNum);

const tank = {
  name: "t-34",
  wheels: 16,
  isLight: true,
};
const tank2 = {
  name2: "tiger",
  wheels2: 32,
  isLight2: false,
};

const twoTanks = { ...tank, ...tank2 };
console.log(twoTanks);

const { name: tankName, wheels } = { ...tank };
// const tankName = tank.name;
// const tankWheels = tank.wheels;
console.log(tankName);
console.log(wheels);

function autorization({ login, password }) {
  console.log(login);
  console.log(password);
}

const user = {
  login: "qwerty@test.com",
  password: "******",
  fullName: "A B C",
  isAdmin: true,
};

autorization(user);
