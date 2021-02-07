class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }
  day(weekday, schedule) {

    let lastDay = this.getLastDayOfMonth();
    let index = this.determinIndex(schedule, lastDay);

    for (index; index <= lastDay; index++) {
      let currentDay = new Date(this.year, this.month - 1, index);
      let firstThreeLett = weekday.slice(0, 3).toLowerCase();
      let matchingDay = currentDay.toString().slice(0, 3).toLowerCase();

      if (matchingDay === firstThreeLett) {
        return currentDay;
      }
    }
    return null;
  }

  getLastDayOfMonth() {

    for (let index = 31; index >= 28; index--) {
      let date = new Date(this.year, this.month - 1, index);
      if (date.getMonth() === this.month - 1) {
        return index;
      }
    }
  }
  determinIndex(schedule, lastDay) {
    schedule = schedule.toLowerCase();
    switch (schedule) {
      case 'first':
        return 1;
      case 'second':
        return 8;
      case 'third':
        return 15;
      case 'fourth':
        return 22;
      case 'fifth':
        return 29;
      case 'last':
        return lastDay - 6;
      case 'teenth':
        return 13;
    }
  }
}

module.exports = Meetup;