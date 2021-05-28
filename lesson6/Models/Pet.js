import Animal from "./Animal";

export default class Pet extends Animal {
  name;
  ownerName;

  constructor(name, ownerName = null) {
    super();
    this.name = name;
    this.ownerName = ownerName;
  }

  makeVoice() {
    console.log(`${this.name} says...`);
  }
}
