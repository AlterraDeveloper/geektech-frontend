import Pet from "./Pet";

export default class Dog extends Pet {
  constructor(name) {
    super(name);
  }

  makeVoice = () => {
    super.makeVoice();
    console.log("Ouw Ouw");
  };

  makeVoice = (voice) => {
    console.log(voice);
  };
}
