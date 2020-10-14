function solve(str) {
  const vowels = 'aeiou'.split('');
  let allSubstr = [];

  for (let index = 0; index < str.length; index++) {
    for (let index2 = index + 1; index2 < str.length + 1; index2++) {
      allSubstr.push(str.slice(index, index2));
    }
  }

  return allSubstr.filter(el => el.split('').every(char => vowels.includes(char))).sort((a, b) => b.length - a.length)[0].length
} 