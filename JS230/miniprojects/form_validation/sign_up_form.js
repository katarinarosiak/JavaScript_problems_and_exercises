
class Model {
    constructor() {
        this.inputError = true;
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
    }

    _initUI() {

        let fieldHTML = document.querySelector('#field').innerHTML;
        Handlebars.registerPartial('field', fieldHTML);

        let container = document.querySelector('#formContainer');
        let formHTML = Handlebars.compile(document.querySelector('#formTemplate').innerHTML);
        
        let formTemplate = formHTML(this.formInfo); 

        container.innerHTML = formTemplate;
    }

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
            this._setAttributes(input, attr.attributes);
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
        console.log(isError); 
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
        errorPlaceHolder.textContent = "";
    }

    errorBorderDisplay(isError, el) {
        if (isError) {
            el.classList.add("onErrorInputChange"); 
        } else {
            el.classList.remove("onErrorInputChange"); 
        }
    }

};

class Controler {
    constructor(formInfo) {
        this.view = new View(formInfo); 
        this.model = new Model(); 
    
        this.view.formEl.addEventListener('focusout',this.handleFocusOut.bind(this));
        this.view.formEl.addEventListener('submit', this.handleSubmit.bind(this));  
    }

    handleFocusOut(event) {
        if (!event.target.checkValidity()) {
            this.view.displayErrorMessageForInput(event.target, event.target.validationMessage);
            this.view.errorBorderDisplay(true, event.target);
            this.model.inputError = true;
        } else {
            this.view.removeErrorMessage(event.target);
            this.view.errorBorderDisplay(false, event.target);
            this.model.inputError = false; 
        }
    }

    handleSubmit(event) {
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
            {id: "first_name", label: {for: 'first_name', value: "First Name"}, attributes: {type: "text", name: "first_name", id: "first_name", required: "true"}},
            {id: "last_name", label: {for: 'last_name', value: "Last Name"}, attributes: {type: "text", name: "last_name", id: "last_name", required: "true"}},
            {id: "email", label: {for:'email', value: "Email"}, attributes: {type: "email", name: "email", id: "email", required: "true", pattern:".+@.+", placeholder: "example@domain.com"}},
            {id: "password", label: {for: 'password', value: "Password"}, attributes: {type: "password", name: "password", id: "password", required: "true", minlength: "10"}},
            {id: "phone", label: {for: 'phone', value: "Phone"}, attributes: {type: "tel", name: "phone", id: "phone", pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}", placeholder: '111-222-3333'}},
            {id: "button", label: {for: "", value: ""}, attributes: {type: "submit", name: "submit_btn", id: "submit_btn", value: "Signup"}}
        ],
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