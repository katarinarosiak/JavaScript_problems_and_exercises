
let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];


let template1 = [
  ["The", randomize(adjectives), randomize(adjectives), randomize(nouns), randomize(adverbs)],
  [randomize(verbs), "the", randomize(adverbs), randomize(adjectives)],
  [randomize(nouns), "who", randomize(adverbs), randomize(verbs), "this"],
  [randomize(nouns), "and looks around."]];



function madlibs(template) {

  for (let index = 0; index < template.length; index++) {
    console.log(template[index].join(' '));
  }

}


function randomize(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}


madlibs(template1);
