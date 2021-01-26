class Scrabble {
  static scoresTable = {
    1: /[AEIOULNRST]/i,
    2: /[DG]/i,
    3: /[BCMP]/i,
    4: /[FHVWY/]/i,
    5: /[K]/i,
    8: /[JX]/i,
    10: /[QZ]/i,
    0: /\w/
  }

  static score(word) {
    let scrabble = new Scrabble(word);
    return scrabble.score();
  }
  constructor(word) {
    this.word = word;
  }
  score() {
    let scoresSum = 0;

    if (this.word === null) return scoresSum;
    this.word.split('').forEach(letter => {
      for (let key in Scrabble.scoresTable) {
        if (letter.match(Scrabble.scoresTable[key])) {
          scoresSum += Number(key);
        }
      }
    });
    return scoresSum;
  }
}

module.exports = Scrabble;