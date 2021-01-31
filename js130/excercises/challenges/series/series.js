class Series {
  constructor(strOfDigits) {
    this.strOfDigits = strOfDigits;
  }
  slices(len) {
    let allSeries = [];

    if (len > this.strOfDigits.length) {
      throw new Error();
    }

    for (let index = 0; index < this.strOfDigits.length; index++) {
      let sliced = this.strOfDigits.slice(index, index + len);

      if (sliced.length === len) {
        allSeries.push([...sliced].map(el => +el));
      }
    }
    return allSeries;
  }
}

module.exports = Series;