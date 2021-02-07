class Clock {
  constructor(time) {
    this.time = time;
  }
  static at(num1, num2 = 0) {
    let time = Clock.caclulateTime(num1, num2);


    return new Clock(time);
  }

  static caclulateTime(num1, num2 = 0) {
    let hours = 0;
    let minutes = 0;

    if (num1 < 24 && num1 >= 0) {
      hours = num1;
    } else if (num1 >= 24) {

      hours = num1 % 24
    } else if (num1 > -23) {

      hours = 24 + num1
    } else {

      hours = 24 + (num1 % 24);
    }

    if (num2 < 60 && num2 >= 0) {
      minutes = num2;
    } else if (num2 > 0) {

      hours = hours + Math.floor(num2 / 60)
      minutes = num2 % 60;
    } else {

      if (hours > 0) {
        hours = hours - 1;
        minutes = 60 + num2;
      } else {
        hours = 24 - hours - 1;
        minutes = 60 + num2;
      }

    }

    if (hours === 24) {
      hours = 0;
    }

    return { hours: hours, minutes: minutes };
  }
  add(min) {
    this.time = Clock.caclulateTime(this.time.hours, this.time.minutes + min)


  }
  substract(min) {
    this.time = Clock.caclulateTime(this.time.hours, this.time.minutes - min)
  }

  toString() {
    let minZero = this.time.minutes <= 9 ? 0 : '';
    let hZero = this.time.hours <= 9 ? 0 : '';

    return `${hZero}${this.time.hours}:${minZero}${this.time.minutes}`
  }
}  