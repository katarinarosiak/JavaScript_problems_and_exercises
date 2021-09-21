// Processing Releases

// Write a Function named processReleaseData that processes the following movie release data:

// let newReleases = [
//   {
//     'id': 70111470,
//     'title': 'Die Hard',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 654356453,
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
//   {
//     'title': 'The Chamber',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 675465,
//     'title': 'Fracture',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
// ];

// The Function should generate an Array of Objects that contain only the id and title key/value pairs. You may assume that id and title, when existing, is an integer greater than 0 and non-empty string respectively. Here are the rules:

// Keep only releases that have both id and title property present.
// Keep only the id and title data for each release.

// function processReleaseData(data) {
//   // ...
// }

// processReleaseData(newReleases);

// // should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];



// i: arr of Objects
// o: arr of obj. (with only id and title ket.val pairs)

// - id and title may not existing
// - id integre > 0 
// - title - str (not empty)
// - eliminiate all the releases that don't have both id and title, 
// - eahc reales id and data only 

//algo: 
// - iterate through the array of Objects
// - for each object check if the keys id and title exist
// - if they do exist create an object with key id and title and assign to it its  values
// - push the obejct to a new array 
// - continue until the end 
// - return the array  


function processReleaseData(data) {
  return data.filter(obj => obj.title && (obj.id || obj.id === 0)).map(obj => {
    return {
      id: obj.id,
      title: obj.title
    };
  });
};

processReleaseData(newReleases);

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];