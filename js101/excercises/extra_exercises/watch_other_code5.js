// /=begin
// Write a method to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string,

// All given inputs are in lowercase letters a-z.
// =end

// puts common_prefix(["flower", "flow", "fliwht"]) == "fl"
// puts common_prefix(["dog", "racecar", "car"]) == ""
// puts common_prefix(["interspecies", "interstellar", "interstate"]) == "inters"
// puts common_prefix(["throne", "dungeon"]) == ""
// puts common_prefix(["throne", "throne"]) == "throne"


function common_prefix(arr) {
  let firstWord = arr[0];
  let allSubstFirst = [];


  for (let index = 0; index < firstWord.length; index++) {
    let current = firstWord.slice(0, index + 1);
    if (arr.every(word => word.includes(current))) {
      allSubstFirst.push(current);
    }
  }

  return allSubstFirst[allSubstFirst.length - 1] || '';
}

console.log(common_prefix(["interspecies", "interstellar", "interstate"]));