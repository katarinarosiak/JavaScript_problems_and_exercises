// 62. Who likes it ?
//   (https://www.codewars.com/kata/5266876b8f4bf2da9b000362​ )
//     6 kyu
// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other
// items.We want to create the text that should be displayed next to such an item.
//     Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like
// an item.It must return the display text as shown in the examples:
// likes[] // must be "no one likes this"
// likes["Peter"] // must be "Peter likes this"
// likes["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes["Ale

function likesIt(arr) {
  if (arr.length === 0) return 'Noone likes it.';
  if (arr.length === 1) return `${arr[0]} likes it.`;

  let likes = '';
  return `${arr.slice(0, arr.length - 1).join(', ')} and ${arr.slice(arr.length - 1)} like this.`
}

console.log(likesIt([]));
console.log(likesIt(['Peter']));
console.log(likesIt(["Jacob", "Alex"]));
console.log(likesIt(["Max", "John", "Mark"]));
