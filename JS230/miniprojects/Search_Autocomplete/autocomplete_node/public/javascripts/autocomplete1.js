const Autocomplete = {
  wrapInput: function () {
    //this.input.classList.add('autocomplete-wrapper');
    //why do we need to create a new div and not just
    // wrap the input??
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  },
  createUI: function () {
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
  },
  bindEvents: function () {
    this.input.addEventListener('input', this.valueChanged.bind(this));
  },
  valueChanged: function () {
    let inputVal = this.input.value;

    if (inputVal.length > 0) {
      this.fetchMatches(inputVal, (matches) => {
        this.visible = true;
        this.matches = matches;
        this.draw();
      });
    } else {
      this.reset();
    }
  },
  fetchMatches: function (inputVal, callback) {
    //create a url wit a right query 
    let path = `${this.url}${encodeURIComponent(inputVal)}`;
    let request = new XMLHttpRequest();

    request.open('GET', path);
    request.responseType = 'json';

    request.addEventListener('load', event => {
      callback(request.response);
    })
    request.send();

    //why in the LS solution we first add EL and call a callback and only then open a conetcion? 
    // let request = new XMLHttpRequest();

    // request.addEventListener('load', () => {
    //   callback(request.response);
    // });

    // request.open('GET', `${this.url}${encodeURIComponent(query)}`);
    // request.responseType = 'json';
    // request.send();
  },

  draw: function () {
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
    //why we don't have tro serialize JSON here? 
    //let countries = JSON.stringify(this.matches);
    this.matches.forEach(country => {
      let li = document.createElement('li');
      li.textContent = country.name;
      li.classList.add(`autocomplete-ui-choice`);
      this.listUI.appendChild(li);
    })
  },
  reset: function () {
    // call `reset()` when the user clears the input 
    //   - set `visible` and `matches` to initial values
    //   - cleat the UI (call `draw()`
    this.visible = false;
    this.matches = [];

    this.draw();
  },

  init: function () {
    this.input = document.querySelector('input');
    this.url = '/countries?matching=';
    this.listUI = null;
    this.overlay = null;

    this.wrapInput();
    this.createUI();
    this.bindEvents();

    //why do we reset here? 
    this.reset();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Autocomplete.init();
});