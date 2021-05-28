// import Animal from "./Models/Animal";
// import Pet from "./Models/Pet";
// import User from "./Models/User";
// import Cat from "./Models/Cat";

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

// console.log(animal);

//ES5 Classes
// const UserEs5 = function (login, password) {
//   this.login = login;
//   this.password = password;
// };

//ES6 Classes
class User {
  login;
  password;
  age = 0;

  constructor(login, password) {
    this.login = login;
    this.password = password;
  }

  age = {
    get() {
      console.log("get age");
      return 0;
    },
    set(value) {
      console.log(value);
      return;
    },
  };

  // #isAuthorized = false; //Private property

  // #authorizePrivate = () => {
  //   //Private method
  //   console.log("private auth");
  // };

  authorize = () => {
    //Public method
    // this.#isAuthorized = true;
    // this.#authorizePrivate();
  };

  // logout = () => (this.#isAuthorized = false);

  // showMe = () => {
  //   if (this.#isAuthorized) {
  //     console.log(this);
  //   }
  // };
}

const user1 = new User("es5@gmail.com", "123456");
const user2 = new User("es6@gmail.com", "123456");

console.log(user1);
user2.age = -500;
console.log(user2.age);
console.log(user2);

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
