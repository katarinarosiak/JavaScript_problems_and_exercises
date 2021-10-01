// Mail Count
// The objective of this practice problem is to build a function that parses a string of email data. The function takes an argument that contains the data, parses it, then produces two basic statistics about the email:

// The number of email messages found in the string
// The date range of the email messages
// The email messages string has the following characteristics:

// The string contains multiple email messages separated by the delimiter string ##||##.

// Each email message has five parts. The delimiter string #/# separates the parts.

// The five parts are:

// Sender
// Subject
// Date
// Recipient
// Body
// All five parts occur in the sequence shown above.

// Examples


// i : data (e mail message string)
// o: statistics
//  - The number of email messages found in the string
//  - The date range of the email messages

// - function parsing string of e mail data 
// - e mail message: 
//   - string contains multiple email messages
//   -  ##||## separates e mails 
//   - each e mail 5 parts 
//   - #/# separates the parts 
//   - parts:  (always 5)
// Sender
// Subject
// Date
// Recipient
// Body


//Algo:
// - create a object to store data about statistic 
// - separate e mails into array of strings 
// - assign the length of the array to a variable Count of Email in statistics
// - iterate through each e-mail 
// - separate each e mail into parts 
//   - find date part
//   - calculate the date range for each e mail:
//     - extract dates from each e mail ad save them to a variable
//     - sort the date from the earliest to the latest
//     - choose the first one and the last one and create a range 
//     - change the dates to be the right format
//   - assign the range to variable range date in th statistics 
//   - console log the count of e mails and date range 


function mailCount(emailData) {
  let count;
  let separatedEmails = emailData.split('##||##');
  count = separatedEmails.length;

  let allDatesSorted =  separatedEmails.map(email => email.split('#/#')[2]).map(splitDate).sort(sortDates);

  console.log(`Count of Email: ${count}`);
  console.log(`Date Range: ${getDateRange(allDatesSorted)}`);
}

function splitDate(part) {
  return part.split(' ')[1].split('-');
}

function sortDates(date1, date2) {
  if (compareDates(date1, date2)) {
    return 1;
  } else {
    return -1;
  }
}

function compareDates(date1, date2) {
  let [month1, day1, year1] = date1.map(el => +el);
  let [month2, day2, year2] = date2.map(el => +el);

  if (year1 !== year2) {
    return year1 > year2;
  } else if (month1 !== month2) {
    return month1 > month2;
  } else {
    return day1 > day2;
  }
}

function getDateRange(allDatesSorted) {
  let firstDate = new Date(allDatesSorted[0]).toDateString()
  let lastDate = new Date(allDatesSorted[allDatesSorted.length -1 ]).toDateString();

  return firstDate + ' - ' + lastDate;
}


// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016