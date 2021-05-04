var text = "Hello dear User!!!"; //Это приветствие
var text2;

//number
var age = 7;

//addition
// console.log("7 + 1 = " + age + 1);
//subtraction
// console.log(age - 7);
//multiplication
// console.log(age * 10);
//division
// console.log(age / 10);
//mod
// console.log(age % 2);
// console.log(-age);

// console.log(age / "Петя");

// console.log(age + 10);
// console.log(Infinity === Infinity);
// console.log(isNaN(age));
// console.log(isFinite(age));

//string
var name = "Петя";
var surname = "Иванов";
//template string
var fullName = `Это я  - ${name} \n ${surname}`;
//escaping
var path = "C:\\\\Documents\\MyDocs";
// console.log(path);
// console.log(fullName);

//boolean
var isHomeworkDone = false;

// console.log(isHomeworkDone);
// console.log(!isHomeworkDone);
// console.log(isHomeworkDone && isSeek);
// console.log(isHomeworkDone || isSeek);

// console.log(5 === 5);
// console.log(5 == 5);
// console.log(5 === "5");
// console.log(5 == "5");
// console.log(5 !== 10);
// console.log(5 > 10);
// console.log(5 >= 10);
// console.log(5 < 10);
// console.log(5 <= 10);

//undefined
// var _var;
// console.log(_var);
//functions
// var hello = function() {
//     alert(`Привет, ${name} ${surname}`)
//     alert(`Привет, ${name} ${surname}`)
//     alert(`Привет, ${name} ${surname}`)
// }
// hello()

//object
// var boy = {
//   name: "John",
//   surname: "Doe",
//   age: 25,
//   isProgrammer: true,
//   hello: function () {
//     alert(`Hello, ${this.name} ${this.surname}`);
//   },
// };

var isSeek = false;
if (age >= 6 && age <= 12) {
  console.log("Начальная школа");
} else if (age > 12 && age <= 18) {
  console.log("Старшая школа");
} else if (age > 18) {
  console.log("Ты либо студент либо работаешь");
} else {
  console.log("Ты дошколенок");
}

switch (age) {
  case 7:
    console.log("Первоклассник");
    break;
  case 8:
    console.log("Второклассник");
    break;
  case 9:
    console.log("Второклассник");
    break;
  case 10:
    console.log("Второклассник");
    break;
  default:
    console.log("Ты либо студент либо работаешь");
}

var undef = undefined;
//truthy falsy
var age2 = "vbuik"; //false
var age3 = "";

// if(!undef) console.log("this is undefined");
if (age2) console.log("age2");
if (age3) console.log("age3");

if (age < 0) {
  console.log("Неверный возраст");
} else {
  console.log("Верный возраст");
}

age < 0 ? console.log("Неверный возраст") : console.log("Верный возраст");

// var myName = prompt("как тебя зовут?");


console.log(age);

age = "Petya"
console.log(age);
age = function(){}

