class Robot {
  static usedNames = []

  constructor() {
    this.currentName = '';

    this.setName();

  }
  name() {
    return this.currentName;
  }
  setName() {
    while (true) {
      let randomName = this.generateRandomName();
      if (Robot.usedNames.includes(randomName)) {
        randomName = this.generateRandomName()
      } else {
        this.currentName = randomName;
        Robot.usedNames.push(randomName);
        break;
      }
    }
  }
  reset() {
    this.setName();
  }
  generateRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  generateRandomName() {
    let randomNum = this.generateRandomBetween(999, 100);
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let randomIndex1 = this.generateRandomBetween(25, 0)
    let randomIndex2 = this.generateRandomBetween(25, 0)

    let randomName = `${alpha[randomIndex1]}${alpha[randomIndex2]}${randomNum}`;

    return randomName;
  }
}

module.exports = Robot;