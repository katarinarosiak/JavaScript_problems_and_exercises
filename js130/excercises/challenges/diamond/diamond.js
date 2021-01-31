class Diamond {
  static makeDiamond(letter) {

    if (letter === 'A') {
      return 'A\n';
    } else {
      return Diamond.printPartDiamond(letter, 'top') + Diamond.printPartDiamond(letter, 'bottom');
    }
  }
  static printPartDiamond(letter, part) {
    let alphabeth = Diamond.allLetters();
    let indexOfLett = alphabeth.indexOf(letter);
    let spacesLR = indexOfLett - 1;
    let currentLetter = letter;
    let spaceMiddle;
    let aRaw = `${' '.repeat(spacesLR + 1)}A${' '.repeat(spacesLR + 1)}`;
    let diamond = '';

    if (part === 'top') {

      diamond += aRaw + '\n';
      for (let index = 0; index < indexOfLett; index++) {
        currentLetter = alphabeth[index + 1];
        spaceMiddle = ' '.repeat(index * 2 + 1);
        diamond += `${' '.repeat(spacesLR)}${currentLetter}${spaceMiddle}${currentLetter}${' '.repeat(spacesLR)}\n`;
        spacesLR--;
      }
      return diamond;
    } else {
      spacesLR = 1;
      let index;
      for (index = indexOfLett; index > 1; index--) {
        currentLetter = alphabeth[index - 1];
        spaceMiddle = ' '.repeat(index * 2 - 3);

        diamond += `${' '.repeat(spacesLR)}${currentLetter}${spaceMiddle}${currentLetter}${' '.repeat(spacesLR)}\n`;
        spacesLR++;
      }
      diamond += aRaw + '\n';
      return diamond;
    }
  }
  static allLetters() {
    return 'abcdefghijklmnoprstuvwqyz'.toUpperCase().split('');
  }
}

module.exports = Diamond;

module.exports = Diamond;

module.exports = Diamond;