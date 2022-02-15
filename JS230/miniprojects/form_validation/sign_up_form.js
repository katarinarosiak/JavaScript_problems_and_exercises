class Model {
    constructor() {
        this.inputError = true;
        this.inputValues = ""; 
    }
    serializeData() {
        
        if (this.inputError) return;

        let form = document.querySelector('form');
        let data = new FormData(form);
        let concatCCnums = data.getAll("credit_card").join(''); 
        data.delete("credit_card"); 
        data.append("credit_card", concatCCnums); 

        let queryParams = [];
    
    
        for (let keyVal of data.entries()) {
            queryParams.push(encodeURIComponent(`${keyVal[0]}=${keyVal[1]}`));
        }
    
        this.inputValues =  queryParams.join('&'); 

    }
};

class View {
    constructor(form) {
        this.formInfo = form;
        this.formEl = null;

        this._init();          
    }

    _init() {
        this._initUI();
        this._initErrorField();
        this._setFormEl(); 
        this._setAttributes(this.formEl, this.formInfo.attributes);
        this._setInputAttributes(); 
        this._setAttributesForSpecial();
    }

    _initUI() {

        let fieldHTML = document.querySelector('#field').innerHTML;
        Handlebars.registerPartial('field', fieldHTML);

        let creditCardSpecialField = document.querySelector('#creditCardSpecialField').innerHTML;
        Handlebars.registerPartial('creditCardSpecialField', creditCardSpecialField);

        let container = document.querySelector('#formContainer');
        let formHTML = Handlebars.compile(document.querySelector('#formTemplate').innerHTML);

        Handlebars.registerHelper('isLast', (id) => {
            let el = document.getElementById(id);
            let arr = this.formInfo.specialFields.creditCard.inputFields;
            return id === arr[arr.length-1].attributes.id;
        });
        
        let formTemplate = formHTML(this.formInfo); 

        container.innerHTML = formTemplate;
    }

    _setAttributesForSpecial() {
        let inputs = this.formInfo.specialFields.creditCard.inputFields;

        inputs.forEach(attrObj => {
            let el = document.querySelector(`#${attrObj.attributes.id}`); 

            this._setAttributes(el, attrObj.attributes);
        })

    };

    _setAttributes(element, attrObj) {
        let attrArr = Object.entries(attrObj); 

        attrArr.forEach(attribute => {
            element.setAttribute(attribute[0], attribute[1]);
        }) 
    }
    _setInputAttributes() {
        let inputs = [...this.formEl.querySelectorAll('input')];

        inputs.forEach(input =>  {
            let attr = this.formInfo.fields.find(fieldObj => fieldObj.id === input.id);
            if (attr) {
                this._setAttributes(input, attr.attributes);
            }
        });

    }

    _initErrorField() {
        let errorField = document.querySelector(`#${this.formInfo.error.id}`);
        this.formInfo.error.classes.forEach(errorClass => {
            errorField.classList.add(errorClass); 
        })
    }

    submitErrorDisplay(isError) {

        let submitErrorField = document.querySelector("#errorMessageField"); 
        if (isError) { 
            submitErrorField.classList.remove("visibility");
        } else {
            submitErrorField.classList.add("visibility");
        }
        
    }

    _setFormEl() {
        let form = document.querySelector(`#${this.formInfo.id}`);
        this.formEl = form;  
    }

    displayErrorMessageForInput(el, message) {
        let errorPlaceHolder = el.parentNode.querySelector(".errorMessage");
        errorPlaceHolder.textContent = message;
    }

    removeErrorMessage(el) { 
        let errorPlaceHolder = el.parentNode.querySelector(".errorMessage");
        if (errorPlaceHolder) {
            errorPlaceHolder.textContent = "";
        }
    }

    errorBorderDisplay(isError, el) {
        if (isError) {
            el.classList.add("onErrorInputChange"); 
        } else {
            el.classList.remove("onErrorInputChange"); 
        }
    }

    displaySerializedData(data) {
        let container = document.querySelector(".submited_data");
        container.textContent = data;  
    }

};

class Controler {
    constructor(formInfo) {
        this.view = new View(formInfo); 
        this.model = new Model(); 
    
        this.view.formEl.addEventListener('focusout',this._handleFocusOut.bind(this));
        this.view.formEl.addEventListener('submit', this._handleSubmit.bind(this)); 

        this._addListenersToMakeInputLimited(['#first_name', '#last_name', '#phone', "#cc1", "#cc2", "#cc3", "#cc4"]) 
        
        let creditCardFieldEl = document.querySelector(".credit_card_field");
        creditCardFieldEl.addEventListener('keyup', this._ifMaxLenChangeFocus.bind(this));
        
        this.view.formEl.addEventListener('submit', this.showSerializedDataInBox.bind(this)); 
    }

    showSerializedDataInBox(event) {
        this.model.serializeData(); 
        this.view.displaySerializedData(this.model.inputValues);
    }

    _ifMaxLenChangeFocus(event) {
        let currEl = event.target; 
        if (currEl.id !== "cc4") {
            if (currEl.value.length === 4) {
                let dig = +(currEl.id.match(/\d/g));
                let nextEl = document.querySelector(`#cc${dig+1}`); 
                nextEl.focus(); 
            }
        }
    }

    _addListenersToMakeInputLimited(selectors) {
        selectors.forEach(selector => {

            let el = document.querySelector(selector);
            let pattern = el.getAttribute('pattern');  
            if (selector === '#phone' || /#cc\d/.test(selector)) {
                pattern = '[0-9]'; 
            } 
            el.addEventListener('keyup', this._preventIncorrectChar(pattern).bind(this));  
        }); 
    }

    _preventIncorrectChar(pattern) {
        return function (event) {
            if (!this._matchValidationPattern(event, pattern)) {
                event.preventDefault(); 
            }
        }
    }
    _matchValidationPattern(event, pattern) {
        let patternRE = new RegExp(`${pattern}`); 
        return patternRE.test(event.key);  
    }

    _handleFocusOut(event) {
        if (!event.target.checkValidity()) {
            if (event.target.className !== 'credit_card') {
                this.view.displayErrorMessageForInput(event.target, event.target.validationMessage);
            }
            this.view.errorBorderDisplay(true, event.target);
            this.model.inputError = true;
        } else {
            if (event.target.type !== 'submit') { 
                this.view.removeErrorMessage(event.target);
                this.view.errorBorderDisplay(false, event.target);
                this.model.inputError = false; 
            }
        }
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.view.submitErrorDisplay(this.model.inputError); 
    }

};




document.addEventListener('DOMContentLoaded', () => {
    
    let form = {
        id: "submit_form",
        action: "www.google.com",
        method: "POST",
        formTitle: "Submit Form",
        fields: [
            {id: "first_name", label: {for: 'first_name', value: "First Name"}, attributes: {type: "text", name: "first_name", id: "first_name", required: "true", pattern: "[a-zA-Z]+"}},
            {id: "last_name", label: {for: 'last_name', value: "Last Name"}, attributes: {type: "text", name: "last_name", id: "last_name", required: "true", pattern: "[a-zA-Z]+"}},
            {id: "email", label: {for:'email', value: "Email"}, attributes: {type: "email", name: "email", id: "email", required: "true", pattern:".+@.+", placeholder: "example@domain.com"}},
            {id: "password", label: {for: 'password', value: "Password"}, attributes: {type: "password", name: "password", id: "password", required: "true", minlength: "10"}},
            {id: "phone", label: {for: 'phone', value: "Phone"}, attributes: {type: "tel", name: "phone", id: "phone", pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}", placeholder: '111-222-3333'}},
        ],
        specialFields: {
            creditCard : {
                label: {for: "creditCard", value: "Credit Card"},
                inputFields: [
                    {attributes: {type:"text", name:"credit_card", class: "credit_card", id:"cc1", maxlength:"4", pattern:"[0-9]{4}", placeholder:"1111"}},
                    {attributes: {type:"text", name:"credit_card", class: "credit_card", id:"cc2", maxlength:"4", pattern:"[0-9]{4}", placeholder:"2222"}},
                    {attributes: {type:"text", name:"credit_card", class: "credit_card", id:"cc3", maxlength:"4", pattern:"[0-9]{4}", placeholder:"3333"}},
                    {attributes: {type:"text", name:"credit_card", class: "credit_card", id:"cc4", maxlength:"4", pattern:"[0-9]{4}", placeholder:"4444"}}
                ]
            }
        }, 
        button: {type:"submit", name:"submit_btn", id:"submit_btn", value:"Signup"},
        attributes: {novalidate:true},
        classes: [],
        error: {
            id: 'errorMessageField',
            message: 'Fix error before submiting',
            classes: ['mainError', 'visibility']
        } 
    };

    let controler = new Controler(form); 

})


/*
 - get an serialize data from the inputs 
 - application/x-www-form-urlencoded

 - prevent defaulr 
 - add block el at the bottom with heading 'Serialized Form'
 - render the data in that block
 
 - extract the data (if valid) 
 - use data to create key=val pairs separated by &
 - first_name=David&last_name=Shepherd&email=davids%40example.com
 - URL encode all of the key and vals 
 - credit cards data should be one string 
 - render the data as a text in the block 

  let str = ''
  on submit add event listener    <= model 
  if no error 
  get all the inputs
  
  if input one of creditCard field: 
    str = key 
    get all the values 
    contact 
    URL encode
    concat with str
  else; 

  itearate through all the inputs and 
  get the id as key and value as val key=val
  URL encode both
  conact with string

  

  - create a box 
  - when submited get the values str 
  - display on the screen 

  function displaySerializedData(data) 
  - get data 
  - innerHTML = data 



*/



