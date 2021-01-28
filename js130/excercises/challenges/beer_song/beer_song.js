class BeerSong {
  static verse(currVerse) {

    let lastVerse = "No more bottles of beer on the wall, no more bottles of beer.\n" + "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

    if (currVerse === 0) {
      return lastVerse;
    } else if (currVerse >= 1) {
      let bottlesNum = currVerse;
      let secondBottle = currVerse === 1 ? 'no more' : (currVerse - 1);
      let one = currVerse === 1 ? 'it' : 'one';
      let s = currVerse === 2 ? '' : 's';
      let plur = bottlesNum === 1 ? '' : 's';

      return `${bottlesNum} bottle${plur} of beer on the wall, ${bottlesNum} bottle${plur} of beer.\n` + `Take ${one} down and pass it around, ${secondBottle} bottle${s} of beer ` + `on the wall.\n`;
    }
  }

  static verses(verseStart, verseEnd) {
    let allVerses = '';

    for (let index = verseStart; index >= verseEnd; index--) {
      allVerses += BeerSong.verse(index);
      if (verseEnd !== index) allVerses += '\n';
    }
    return allVerses;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;