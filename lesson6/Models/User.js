//ES6 Classes
export default class User {
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
//   get age() {
//     return age;
//   }

//   set age(value) {
//     console.log("set age");
//     if (value < 0) {
//       return;
//     }
//     age = value;
//   }

  #isAuthorized = false; //Private property

  #authorizePrivate = () => {
    //Private method
    console.log("private auth");
  };

  authorize = () => {
    //Public method
    this.#isAuthorized = true;
    this.#authorizePrivate();
  };

  logout = () => (this.#isAuthorized = false);

  showMe = () => {
    if (this.#isAuthorized) {
      console.log(this);
    }
  };
}
