import debounce from './debounce.js';

class Autocomplete {
  constructor(url, input) {
    this.input = input;
    this.url = url;
    this.listUI = null;
    this.overlay = null;
    this.visible = false;
    this.matches = [];
    this.bestMatchIndex = null;
    this.selectedIndex = null;
    this.previousValue = null;

    this.wrapInput();
    this.createUI();


    this.valueChanged = debounce(this.valueChanged.bind(this), 300);

    this.bindEvents();

  }

  wrapInput() {
    //this.input.classList.add('autocomplete-wrapper');
    //why do we need to create a new div and not just
    // wrap the input??
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  }
  createUI() {
    //create DOM elements: 
    let listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');

    let overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    //add the same width as input
    overlay.style.width = `${this.input.clientWidth}px`;

    //add as syblings of text 
    this.input.parentElement.appendChild(listUI);
    this.input.parentElement.appendChild(overlay);

    //add properties:
    this.listUI = listUI;
    this.overlay = overlay;
  }
  bindEvents() {
    this.input.addEventListener('input', this.valueChanged);
    this.input.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.listUI.addEventListener('mousedown', this.handleMousedown.bind(this));
  }
  valueChanged() {
    let value = this.input.value;

    if (value.length > 0) {
      this.fetchMatches(value, matches => {
        this.visible = true;
        this.matches = matches;
        //why bestMatchIndex is here? Not in the init?
        // why we swich it between null and 0?
        this.bestMatchIndex = 0;
        this.selectedIndex = null;
        this.draw();
      });
    } else {
      this.reset();
    }
  }
  handleKeyDown(event) {
    const lastCountryIdx = this.matches.length - 1;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === lastCountryIdx) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex++;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === 0) {
          this.selectedIndex = lastCountryIdx;
        } else {
          this.selectedIndex--;
        }

        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'Tab':
        if (this.bestMatchIndex !== null && this.selectedIndex !== 0) {
          this.input.value = this.matches[this.bestMatchIndex].name;
        }
        event.preventDefault();
        this.reset();
        break;
      case 'Enter':
        this.reset();
        break;
      case 'Escape':
        this.input.value = this.previousValue;
        this.reset();
        break;
    }
    // this.inputVal = this.matches[this.bestMatchIndex].name;
    // this.reset();

  }

  fetchMatches(value, callback) {
    //create a url wit a right query 
    let path = `${this.url}${encodeURIComponent(value)}`;
    let request = new XMLHttpRequest();

    request.addEventListener('load', event => {
      callback(request.response);
    })

    request.open('GET', path);
    request.responseType = 'json';
    request.send();

    //why in the LS solution we first add EL and call a callback and only then open a conetcion? 
    // let request = new XMLHttpRequest();

    // request.addEventListener('load', () => {
    //   callback(request.response);
    // });

    // request.open('GET', `${this.url}${encodeURIComponent(query)}`);
    // request.responseType = 'json';
    // request.send();
  }

  draw() {
    //    - remove all the previous list items rendered to the listUI
    //    - set the overlay content to an empty string if visible is false
    //    - repopulate listUI with the current set of macthed countries
    //    - add the country names to the listUI element
    //    - wrap each country in a `li` element with `autocomplete-ui-choice` class.

    while (this.listUI.firstChild) {
      this.listUI.removeChild(this.listUI.lastChild);
    }

    if (!this.visible) {
      this.overlay.textContent = '';
      return;
    }

    // - choose the first country from the matches
    // - display a suggestion in the input window
    if (this.bestMatchIndex !== null && this.matches.length !== 0) {
      let match = this.matches[this.bestMatchIndex];
      this.overlay.textContent = this.generateOverlay(this.input.value, match.name);
    } else {
      //is this needed?? Why? 
      this.overlay.textContent = '';
    }


    //why we don't have tro serialize JSON here? 
    //let countries = JSON.stringify(this.matches);
    this.matches.forEach((country, index) => {
      let li = document.createElement('li');
      li.classList.add(`autocomplete-ui-choice`);

      if (index === this.selectedIndex) {
        li.classList.add('selected');
        this.input.value = country.name;
      }
      li.textContent = country.name;
      this.listUI.appendChild(li);
    })

  }

  generateOverlay(value, match) {
    return value + match.slice(value.length)
  }

  handleMousedown(event) {
  let element = event.target;
  this.input.value = element.textContent;
  this.reset();
}

reset() {
  // call `reset()` when the user clears the input 
  //   - set `visible` and `matches` to initial values
  //   - cleat the UI (call `draw()`
  this.visible = false;
  this.matches = [];
  this.bestMatchIndex = null;
  this.selectIndex = null;
  this.previousValue = null;

  this.draw();
}


};

document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('input');
  let autocomplete = new Autocomplete('/countries?matching=', 'input');
});