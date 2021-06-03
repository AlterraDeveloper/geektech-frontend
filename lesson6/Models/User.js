//ES6 Classes
export default class User {
  login;
  password;
  #age = 0;
  name;
  surname;

  constructor(login, password) {
    this.login = login;
    this.password = password;
  }

  //read-only property
  get fullName() {
    return `${this.surname} ${this.name}`;
  }

  get age() {
    console.log("getter work");
    return this.#age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Age must be possitive number");
      return;
    }
    this.#age = value;
  }

  toString() {
    return "class User"
  }
}
