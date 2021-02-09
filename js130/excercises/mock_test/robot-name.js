class Robot {
  constructor() {
    this.robotName = undefined;
  }
  static generateRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  static checkIfExist() {

  }
  static allName = []
  name() {

    if (this.robotName === undefined) {
      do {
        let alpha = 'ABCDEFGHIJKLMNOPRSTUWVXYZ';
        let letters = alpha[Robot.generateRandomBetween(0, 24)] + alpha[Robot.generateRandomBetween(0, 24)];
        let numbers = Robot.generateRandomBetween(100, 999);
        this.robotName = letters + numbers;
      } while (Robot.allName.includes(this.robotName));
      Robot.allName.push(this.robotName);
      return this.robotName;
    } else {
      return this.robotName;
    }
  }
  reset() {
    this.robotName = undefined;
  }
}

module.exports = Robot;