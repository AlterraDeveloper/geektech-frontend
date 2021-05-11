//fucntion declaration
function printHello(name, surname, age) {
  //function body
  var prefix = "";
  if (age > 45) prefix = "dear";
  alert(`Hello ${prefix} ${name} ${surname}!!!`);
}

// printHello();

// //function expression
// var printHello2 = function () {
//   //function body
//   console.log("Hello user 2!!!");
// };
// printHello2();

var userName = "Eugene"; // = prompt("What is your name?");
var userSurname = "Kiselev"; // = prompt("What is your surname?");

// printHello(userName, userSurname, 50);

// console.log(userName);
// console.log(userName, userSurname);
// console.log(userName, userSurname, 50, 45, 40 , "dbivue");

// function purchaseOrder() {
//   var userId = arguments[0];
//   for (var i = 1; i < arguments.length; i++) {
//     console.log("User with id " + userId + " ordered " + arguments[i]);
//   }
// }

// purchaseOrder(152);

// function Sum2Numbers(number1, number2) {
//   var num1 = number1 || 0;
//   var num2 = number2 || 0;
//   return num1 + num2;
// }

// function repeater(string, times){
//     return string.repeat(times)
// }

// var sum5and5 = Sum2Numbers(5, 5);
// console.log(sum5and5);
// sum5and5 = Sum2Numbers(5);
// console.log(sum5and5);
// sum5and5 = Sum2Numbers();
// console.log(sum5and5);
// console.log(repeater('a', 10));

// function myFilter(array, filterCallBack) {
//   const newArray = [];
//   for (const item of array) {
//     if (filterCallBack(item)) newArray.push(item);
//   }
//   return newArray;
// }

// function isEven(number) {
//   return number % 2 === 0;
// }

// function isOdd(number) {
//   return number % 2 !== 0;
// }

// console.log(myFilter([1, 2, 3, 4, 5], isEven));
// console.log(myFilter([1, 2, 3, 4, 5], isOdd));
// console.log(
//   myFilter([1, 2, 3, 4, 5], function (number) {
//     return number > 3;
//   })
// );

// console.log("------------------------");
//map, filter, reduce

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   array.filter(function (number) {
//     return number % 2 === 0;
//   })
// );
// console.log(array);
// console.log(
//   array.map(function (number) {
//     return "Number value is " + number;
//   })
// );

// function sumOfArray(sum, number) {
//   return (sum += number);
// }
// var sum = array.reduce(sumOfArray);
// console.log("Array sum is " + sum);

// //chaining

// var arrayOfSquaresEvens = array.filter(isEven).map(function (number) {
//   return number ** 2;
// });
// console.log(arrayOfSquaresEvens);

// var cars = ["Mazda", "BMW", "Merserdes Benz", "Bentley"];

// console.log(
//   cars
//     .map(function (carName) {
//       return carName.toLowerCase();
//     })
//     .filter(function (carName) {
//       return carName[0] === "m";
//     })
//     .map(function (carName) {
//       return carName.toUpperCase();
//     })
//     .reduce(function (sumOfChars, carName) {
//       sumOfChars += carName + " , ";
//       return sumOfChars;
//     }, "")
// );

// var prepender = function (prefix) {
//   return function (string) {
//     return prefix + string;
//   };
// };
// var appender = function (postfix) {
//   return function (string) {
//     return string + postfix;
//   };
// };

// function summator(value) {
//   return function (number) {
//     return number + value;
//   };
// }

// function discont(discontValue) {
//   return function (price) {
//     return price - (price * discontValue);
//   };
// }

// var bestSale = discont(0.3)
// var bestSale = discont(0.2)
// var pensionerSale = discont(0.1)
// var bestSale = discont(0.3)
// console.log(bestSale(500));
// console.log(bestSale(1000));
// console.log(bestSale(25000));

// var adder2 = summator(2);
// var adder5 = summator(5);

// console.log(adder2(10));
// console.log(adder2(50));
// console.log(adder2(587));
// console.log(adder5(1500));
// var httpsPrepender = prepender("https://");
// var httpPrepender = prepender("http://");
// var ruDomainAppender = appender(".ru");
// var comDomainAppender = appender(".com");
// var uaDomainAppender = appender(".ua");
// var kgDomainAppender = appender(".kg");

// console.log(kgDomainAppender(httpsPrepender("google")));
// console.log(uaDomainAppender(httpsPrepender("google")));
// console.log(ruDomainAppender(httpPrepender("yandex")));
// console.log(ruDomainAppender(httpPrepender("microsoft")));

var boy = {
  name: "Ivan",
  surname: "Ivanov",
  age: 7,
  isCorona: false,
  sayHello: function () {
    console.log("Hello! I'm " + this.name + " " + this.surname);
  },
  "His mom name": "Elena",
  7: 49,
};

boy.sayHello();
console.log(boy.name);
console.log(boy["age"]);
console.log(boy["His mom name"]);

boy["His dad name"] = "Vladislav";

// boy.isCorona = undefined

delete boy.isCorona;
delete boy["isCorona"];
console.log(boy);

boy[7];
for (key in array) {
  console.log(key);
  // console.log(key + " -> " + boy[key]);
}

//constructor
function User(login, password) {
  (this.userName = login), (this.password = password);
  return this;
}

var user = new User("", "");

var users = [
  new User("test@gmail.com", "*****"),
  new User("test2@gmail.com", "*****"),
  new User("test3@gmail.com", "*****"),
  new User("test4@gmail.com", "*****"),
  new User("test5@gmail.com", "*****"),
  {
    userName: "",
    password: "*****",
  },
];

console.log(users);
