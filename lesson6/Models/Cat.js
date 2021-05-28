import Pet from "./Pet";

// Cat => Pet => Animal => Object
export default class Cat extends Pet {
  constructor(name) {
    super(name, "Anya");
  }

  makeVoice = () => {
    super.makeVoice();
    console.log("Meow meow");
  };

  toString() {
    console.log(`My name ${this.name}`);
    console.log(`My owner ${this.ownerName}`);
  }
}
