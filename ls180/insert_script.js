// - take 2 strings 

// - return a strings, formated as a SQL INSERT INTO statement 

// 1. Separate strings on double spaces into array of strings 
//   - separate the string on double spaces 
// 2. formate a string from array of strings 

// 3. return 
// - take 2 strings 

// - return a strings, formated as a SQL INSERT INTO statement 

// 1. Separate strings on double spaces into array of strings 
//   - separate the string on double spaces 
// 2. formate a string from array of strings 

// 3. return 

let str = "customer_id	product_id";

let strArr = [];


function separateWords(str) {
  let regx = new RegExp(/[\t\n]/);
  let splitedArr = str.split(regx);
  console.log(splitedArr);
  return splitedArr;
};

function formatColNames(colNames) {
  colNames = colNames.map(el => el.toLowerCase().replace(' ', '_'));
  return `(${colNames.join(', ')})`;
};


function formatValues(strArr) {
  let len = strArr.length;
  let final = [];
  let finalfinal = [];

  for (let i = 0; i < len; i++) {
    final.push(separateWords(strArr[i]));
  }

  final.forEach(innerArr => {
    finalfinal.push(format(innerArr));
  });
  return finalfinal;
}

formatValues(strArr);

function formatInsert(str, strArr) {
  let colNames = formatColNames(separateWords(str));
  let values = formatValues(strArr);

  let template = `INSERT INTO ${colNames} VALUES ${values.join(', ')};`;

  return template;
};


function format(abc) {
  return `('${abc.join("', '")}')`;
}


formatInsert(str, strArr);


