
class Model {
    constructor() {
        this._setValues()
    }

    _setValues() {
        this.currentOperation = "";
        this.operationWindowVal = "";
        this.entryWindowVal = "0"
        this.isResult = false;
    }

    determineEntryWindowVal(event) {
        let currentEntry = event.target.id;
        if (this.entryWindowVal === '0') {
            this.entryWindowVal = currentEntry;
        } else {
           if (this.isResult) {
            this.entryWindowVal = currentEntry;
           } else {
            this.entryWindowVal += currentEntry;
           }
        }
        this.currentOperation += currentEntry;
        this.isResult = false;
    }

    performOperation(buttonVal) {
    
        if (!this._lastIsNum()) {
            this.currentOperation += `${this.entryWindowVal}`;
            console.log(this.currentOperation);                  
            let evaluatedVal = this._count(this.currentOperation);
            this.entryWindowVal = evaluatedVal;
            this.currentOperation += `${buttonVal}`;
            this.operationWindowVal += `${this.entryWindowVal} ${buttonVal} `;
        } else {
            let evaluatedVal = this._count(this.currentOperation)
            this.currentOperation += buttonVal;
            this.operationWindowVal += `${this.entryWindowVal} ${buttonVal} `
            this.currentOperation = evaluatedVal;
            this.entryWindowVal = evaluatedVal;
            this.currentOperation += buttonVal;
        }
        this.isResult = true;
    }

    _lastIsNum() {
        let operation = this.currentOperation.split(' ');
        return /\d+$/.test(operation[operation.length-1]) 
    }

    calculateResult() {
        if (this.currentOperation.length) {
            this.operationWindowVal = "";
            if (!this._lastIsNum()) {
                this.currentOperation += ` ${this.entryWindowVal}`;
            }
            this.entryWindowVal = this._count()
        }
    }

    _count() {
        return eval(this.currentOperation.replace(/X/g, '*'));
    }

    clearEntry() {
        this.entryWindowVal = '0';
        this._removeLastOperation();
    }

    _removeLastOperation() {
        let operation = this.currentOperation.split(' '); 
        operation.pop(); 
        this.currentOperation = operation.join(' ');
    }

    resetData() {
        this.clearEntry();
        this._setValues();
    }

    addNegation() {
        if (this.entryWindowVal) {
            this.entryWindowVal = `-${this.entryWindowVal}`
            this.currentOperation = this.currentOperation.replace(/\d+$/, ($1) => {
                return `-${$1}`
            }); 
        }
    }
}

class View {
    constructor() {
         
    }

    initUI(calculator) {
        let calculatorContainer = document.querySelector('#calculatorContainer');
        let calculatorTemplate = Handlebars.compile(document.querySelector('#calculatorTemplate').innerHTML);  
    
        calculatorContainer.innerHTML = calculatorTemplate(calculator);
        
        this.buttonDiv = document.querySelector('.buttons'); 
        this.operationWindow = document.querySelector('#operationWindow');
        this.entryWindow = document.querySelector('#entryWindow'); 
    }

    updateUI(screenData) {
        this.operationWindow.textContent = screenData.operationWindowVal;
        this.entryWindow.textContent = screenData.entryWindowVal; 
    }
}

class Controler {
    constructor(calculator) {
        this.calculator = calculator;
        this.model = new Model(); 
        this.view = new View ();
    }

    init() {
        this.view.initUI(this.calculator);        
        this.view.buttonDiv.addEventListener('click', this._delegateTask.bind(this)); 
    }

    _getScreenData() {
        let screenData = {}; 
        screenData.operationWindowVal = this.model.operationWindowVal;
        screenData.entryWindowVal = this.model.entryWindowVal;
        return screenData; 
    }

    _delegateTask(event) {
        let classN = event.target.classList[1];
        
        switch(classN) {
            case 'digitBtn':
                this.model.determineEntryWindowVal(event)
              break;
            case 'operationBtn':
                this.model.performOperation(event.target.id); 
              break;
            case 'clearEntrybtn':
                this.model.clearEntry();
              break;
            case 'clearbtn':
                this.model.resetData(); 
              break;
            case 'negateBtn':
                this.model.addNegation(); 
              break;
            case 'resultBtn':
                this.model.calculateResult(); 
              break;
            default:
              console.log('something went wrong'); 
          }
          this.view.updateUI(this._getScreenData());
    }

}

document.addEventListener('DOMContentLoaded', () => {
    let calculator = {
        screen: [
            {id: "operationWindow", value: ""},
            {id: "entryWindow", value: 0}
        ],
        buttons: [{id:'CE', classN:'clearEntrybtn'}, {id:'C', classN: 'clearbtn'}, {id:'NEG', classN:'negateBtn'}, {id:'/', classN: 'operationBtn'},
            {id:'7', classN: 'digitBtn'}, {id:'8', classN:'digitBtn'}, {id:'9', classN:'digitBtn'}, {id:'X', classN:'operationBtn',},
            {id:'4', classN:'digitBtn'}, {id:'5', classN:'digitBtn'}, {id:'6', classN:'digitBtn'}, {id:'-', classN:'operationBtn',},
            {id:'1', classN:'digitBtn'}, {id:'2', classN:'digitBtn'}, {id:'3', classN:'digitBtn'}, {id:'+', classN:'operationBtn',},
            {id:'0', classN:'digitBtn'}, {id:'.', classN:'digitBtn'}, {id:'%', classN:'operationBtn'}, {id:'=', classN:'resultBtn'}
        ] 
    }

    let controler = new Controler(calculator); 
    controler.init(); 

});

