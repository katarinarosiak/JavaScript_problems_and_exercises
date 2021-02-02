class Diamond {
  static makeDiamond(letter) {
    if (letter === 'A') return 'A\n';

    let alphabeth = Diamond.allLetters();
    let indexOfLett = alphabeth.indexOf(letter);
    let spacesLR = indexOfLett - 1;
    let spaceMiddle;
    let aRaw = `${' '.repeat(spacesLR + 1)}A${' '.repeat(spacesLR + 1)}`;
    let diamond = '';

    diamond += aRaw + '\n';
    for (let index = 0; index < indexOfLett; index++) {
      letter = alphabeth[index + 1];
      spaceMiddle = ' '.repeat(index * 2 + 1);
      diamond += `${' '.repeat(spacesLR)}${letter}${spaceMiddle}${letter}${' '.repeat(spacesLR)}\n`;
      spacesLR--;
    }

    spacesLR = 1;
    let index;
    for (index = indexOfLett; index > 1; index--) {
      letter = alphabeth[index - 1];
      spaceMiddle = ' '.repeat(index * 2 - 3);
      diamond += `${' '.repeat(spacesLR)}${letter}${spaceMiddle}${letter}${' '.repeat(spacesLR)}\n`;
      spacesLR++;
    }
    diamond += aRaw + '\n';

    return diamond;
  }

  static allLetters() {
    return 'abcdefghijklmnoprstuvwqyz'.toUpperCase().split('');
  }
}

module.exports = Diamond;