// Challenge: write a method that changes dates in the format 2016-06-17 or 2016/06/17 to the format 17.06.2016. You must use a regular expression and should use methods described in this section.

function formatDate(date) {
  let regex1 = /^(\d\d\d\d)-(\d\d)-(\d\d)$/
  let regex2 = /^(\d\d\d\d)\/(\d\d)\/(\d\d)$/;

  if (date.match(regex1)) {
    return date.replace(regex1, '$3.$2.$1');
  } else {
    return date.replace(regex2, '$3.$2.$1');
  }
}


console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)