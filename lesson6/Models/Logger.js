//Singleton
export default class Logger {
  static instance;

  static get instance() {
    return instance ? instance : new Logger();
  }

  static constructor() {
    throw new Error("I'm Singleton");
  }

  static log(obj) {
    console.log(`INFO ${new Date()} ${JSON.stringify(obj)}`);
  }
}
