// const Autocomplete = {
//   wrapInput: function () {
//     let wrapper = document.createElement('div');
//     wrapper.classList.add('autocomplete-wrapper');
//     this.input.parentNode.appendChild(wrapper);
//     wrapper.appendChild(this.input);
//   },

//   createUI: function () {
//     let listUI = document.createElement('ul');
//     listUI.classList.add('autocomplete-ui');
//     this.input.parentNode.appendChild(listUI);
//     this.listUI = listUI;

//     let overlay = document.createElement('div');
//     overlay.classList.add('autocomplete-overlay');
//     overlay.style.width = `${this.input.clientWidth}px`;

//     this.input.parentNode.appendChild(overlay);
//     this.overlay = overlay;
//   },

//   bindEvents: function () {
//     this.input.addEventListener('input', this.valueChanged.bind(this));
//     this.input.addEventListener('keydown', this.handleKeydown.bind(this));
//     this.input.addEventListener('mousedown', this.handleMousedown.bind(this));
//   },
//   //hide the list and ill the text input with the clicked-on country name
//   handleKeydown: function (event) {
//     let chosenName = event. //get value of div 
//   },
//   //user select a country by pressing up or down arrow
//   handleKeydown: function (event) {
//     switch (event.key) {
//       case 'ArrowDown':
//         event.preventDefault();
//         if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
//           this.selectedIndex = 0;
//         } else {
//           this.selectedIndex += 1;
//         }
//         this.bestMatchIndex = null;
//         this.draw();
//         break;
//       case 'ArrowUp':
//         event.preventDefault();
//         if (this.selectedIndex === null || this.selectedIndex === 0) {
//           this.selectedIndex = this.matches.length - 1;
//         } else {
//           this.selectedIndex -= 1;
//         }
//         this.bestMatchIndex = null;
//         this.draw();
//         break;
//       case 'Tab':
//         if (this.bestMatchIndex !== null && this.matches.length !== 0) {
//           this.input.value = this.matches[this.bestMatchIndex].name;
//           event.preventDefault();
//         }
//         this.reset();
//         break;
//       case 'Enter':
//         this.reset();
//         break;

//       case 'Escape':
//         this.input.value = this.previousValue;
//         this.reset();
//         break;

//     }
//   },

//   valueChanged: function () {
//     let value = this.input.value;
//     this.previousValue = value;

//     if (value.length > 0) {
//       //send AJAX request to the server with queries 
//       this.fetchMatches(value, matches => {
//         this.visible = true; //overlay has any text in it
//         this.matches = matches; //list of countries 
//         this.bestMatchIndex = 0; //index of a country that best matches 
//         this.selectedIndex = null; //reset selected index to default
//         this.draw();
//       });
//     } else {
//       this.reset();
//     }
//   },
//   fetchMatches: function (query, callback) {
//     let request = new XMLHttpRequest();

//     request.addEventListener('load', () => {
//       callback(request.response);
//     });

//     request.open('GET', `${this.url}${encodeURIComponent(query)}`);
//     request.responseType = 'json';
//     request.send();
//   },
//   draw: function () {
//     //remove previous list items(country names) remndered earlier
//     while (this.listUI.lastChild) {
//       this.listUI.removeChild(this.listUI.lastChild);
//     }

//     //set overlay content to emty str if visible is false
//     if (!this.visible) {
//       this.overlay.textContent = '';
//       return;
//     }

//     //render the appropriate country name 
//     if (this.bestMatchIndex !== null && this.matches.length !== 0) {
//       let selected = this.matches[this.bestMatchIndex];
//       this.overlay.textContent = this.generateOvelayContent(this.input.value, selected);
//     } else {
//       this.overlay.textContent = '';
//     }


//     //repupulate listUI with current set of matched countries
//     this.matches.forEach((match, index) => {
//       let li = document.createElement('li');
//       li.classList.add('autocomeplete-ui-choice');

//       //
//       if (index === this.selectedIndex) {
//         li.classList.add('selected');
//         this.input.value = match.name;
//       }

//       //add country names to listUI
//       li.textContent - match.name;
//       this.listUI.appendChild(li);

//     });
//   },

//   //sets values to initial vals
//   reset: function () {
//     this.visible = false;
//     this.matches = [];
//     this.bestMatchIndex = null;
//     this.selectedIndex = null;
//     this.previousValue = null;

//     //clear the UI
//     this.draw();
//   },

//   //match the overlay if lowercase: take first letter of input and compelte the rest
//   generateOvelayContent: function (value, match) {
//     let end = match.name.substr(value.length);
//     return value + end;
//   },

//   init: function () {
//     this.input = document.querySelector('input');
//     this.url = '/countries?matching=';

//     this.listUI = null;
//     this.overlay = null;

//     this.visible = false;
//     this.matches = [];

//     this.wrapInput();
//     this.createUI();
//     this.bindEvents();

//     this.reset();
//   },

// };

// document.addEventListener('DOMContentLoaded', () => {
//   Autocomplete.init();
// });