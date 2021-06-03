import Animal from "./Models/Animal";
import Pet from "./Models/Pet";
import User from "./Models/User";
import Cat from "./Models/Cat";
import Dog from "./Models/Dog";

// const catBarsik = new Cat("Barsik");
// const catVaska = new Cat("Vaska");
// const catBublik = new Cat("Bublik");
// console.log(catBarsik.name);
// catBarsik.ownerName = "Anya"
// console.log(catBarsik.ownerName);
// catBarsik.makeVoice();
// catVaska.makeVoice();
// catBublik.makeVoice();
// console.log(new Object().toString());
// console.log(catBarsik);

const user1 = new User("es5@gmail.com", "123456");

console.log(user1.__proto__.toString());
// const user2 = new User("es6@gmail.com", "654321");

// const animals = [
//   new Pet("BArsik"),
//   new Animal(),
//   new Cat("Murka"),
//   new Dog("Sharik"),
//   new Pet("Puzyr"),
// ];

// animals.forEach((animal) => {
//   animal.makeVoice();
//   console.log("-------------------------");
// });

// const Pet = function (name) {
//   this.name = name;
//   this.owner = "Ivan";
//   this.color = "brown";
//   this.makeVoice = () => {
//     console.log(`${this.name} says ...`);
//   };
// };

// Pet.prototype.makeVoice = function () {
//   console.log(`${this.name} says ...`);
// };

// console.log(new Pet("qwerty").makeVoice());

// const dog = Object.create(new Pet("Sharik"));
// console.log(dog.color);

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

const names = ["Ivan", "Max", "Sveta", "Anya"];
const numbers = [555, 444, 333, 222, 1111];
console.log(names.first());
console.log(names.last());
console.log(numbers.first());
console.log(numbers.last());
// numbers.last()
// user1.age = -500 //call setter
// console.log(user1.age); //call getter

// user1.name = "Eugene";
// user1.surname = "Kiselev";
// user1.fullName = "Max Ivanov";
// console.log(user1.fullName);

// user1.authorize();
// user2.isAuthorized = true;

// user1.showMe();
// user2.showMe();

//Inheritance in ES5
// const User = function () {
//   this.login = "";
//   this.password = "";
// };

// const user2 = Object.create(User);
// console.log(user2);
// console.log(user2.__proto__);

Array.prototype.filter = function (filterCallback) {
  const newArray = [];
  console.log("call my filter");
  for (const item of this) {
    if (filterCallback(item)) newArray.push(item);
  }
  return newArray;
};

// console.log(numbers.filter((number) => number % 2 === 0));

// const pet = new Dog("Pit");
// pet.makeVoice("Meow meow")

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  a: 5,
  d: "16234",
};

let shop = {
  shirt: 500,
  shoes: 4500,
  pants: 8000,
  coats: 15000,
};

let shop2 = {
  shirt: 1000,
  belts: 300,
};

console.log(Object.entries(shop));
console.log(Object.entries(shop2));

shop = { ...shop, ...shop2 };
console.log(shop);



setState({

})
