Random Recipe Generator
One bored and hungry evening we decided to randomly generate recipes. We can't wait to see the first suggestions, but JavaScript raises a TypeError, telling us that dishName.join is not a function. What is wrong?



// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));


The code returns an error 'dishName.join(' ') is not a function.'. This type of error is usually printed if the variable that we call the method on is not the data type that we expected it to be and therefore the method we are calling cannot be executed on this variable. In this case join(' ') is a array method. It will take array elements and join them returning a string. However if we inspect dishName variable, we can see that it is already a string. We have used '+' operator to concatinate arrays with each other on line 46 and javascript would implicitly coerce those arrays to strings. This happends both with `dishName` and `dish`. To get rid of the error we can simply remove join( ' ') method as it's no longer needed. 