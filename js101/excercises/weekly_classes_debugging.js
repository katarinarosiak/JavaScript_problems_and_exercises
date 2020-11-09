function toDate(string) {
  return new Date(string);
}


const TODAY = toDate("2018-08-05");

function toString(date) {
  return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {

  return date.getDay() >= 1 && date.getDay() <= 5;
}

function getStrFromDate(date) {
  let year = date.getFullYear();
  let month = function () {
    let num = date.getMonth() + 1;
    return num < 10 ? '0' + num : num;
  }
  let day = function () {
    let num = date.getDate();
    return num < 10 ? '0' + num : num;
  }
  return `${year}-${month()}-${day()}`
}


let myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"]
};

let offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"], //
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],//
  "Mike's Hikes": ["2018-08-16"], //ok
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"], //have sth else
  "Powerboating 101": ["2018-09-15", "2018-09-16"], //ok
  "Discover Parachuting": ["2018-11-02"]  //have sth else
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    let dateStr = getStrFromDate(date)

    if (calendar[dateStr]) {
      return calendar[dateStr].length === 0;
    } else {
      return true;
    }
  }

  let compatibleClasses = [];

  Object.keys(classes).forEach(className => {
    let classDates = classes[className].map(toDate);

    //ok
    if (classDates.some(isInThePast)) {
      return;
    }
    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]