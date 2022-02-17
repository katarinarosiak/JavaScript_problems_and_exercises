/*
//TODO: 
- attach files
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"></script>
    <script type="text/javascript" src="quiz.js"></script>
    <link rel="stylesheet" href="quiz.css">

    <script type="text/x-handlebars-template" id="quizForm">

//Goal: 
Build A GUI standard calculator 

// Assets/ Inputs: 


//Specifics: 

Explicit: 


Implicit: (test to find out)


UI: 
Screen: 
- lower part: entry window => shows current entry: entered number or most recents result
- upper part - operation window => shows operation in progress

Buttons: 
- digits 0-9
- +, -, /, *, %, =, NEG, C, CE
- NEG: buttn negates the value in the window
- CE clears the entry window and replaces it with 0
- C: clear both entry and operation window 
     leaves val 0 in the entry window 

Operations: 
- on click any digits button:
    append the digit to the num in the entry wondow
    check if the value in entry window === 0
    if so replace with the pressed digit 
- on operation btn: 
    - copy the current entry and the operator into operation window 
    - leave the current entry in the entry window or set to 0
        whatever decided next digit should begin new num 
- on = btn 
    - take current operation and current entry to calculate the final result 
    - clear the current operation  window
    - display the result in entry window

% is module operator 


screen, 
    entryWindow
    operationWindow

    currentEntry
    currentOperation

Buttons: 
    digitButton

clearEntryWindow()
clearOperationWindow()

appendDigittoNum(); 
replaceEntryWindowVal()
copyCurrentEntry()
setEntryWindowVal(); 

calculateFinalResult(currentOperation, currentEntry)

displayResult(); 

buttons add Event listener: 
    on click digit button: 
        append the digit to the num in the entry wondow
        check if the value in entry window === 0
        if so replace with the pressed digit 

        
        get event.key 
        if event key. class digit btn
        if !=== 0
        appendDigittoNum(); (M)
        else 
        replaceZeroWithDigit() 


on click bttn   (delegetaion) (C)
    check classN

    case: digitBtn
        this.entryWindow value =  determineNewEntryWindowVal(event)
        this.view.updateUI( this.entryWindow value, =0); 
    case: operationBtn
        get the event key and concat with operationWindowVal
        set currentOperationSign
        entryWindowVal = calculateResult(previousVal, operationsign, currentVal) (M)
        - take the value from the entryWindow
        - perform operation
            
        - return the result of the operation 
        - assign it to the entry window value
         

        updateUI:
        this.view.updateUI( this.entryWindow value, =0);  (V) 
        - use the value to update entry window val 
        - concat this value with the opration sign 

    case CE 
        clearEntryWindow()  (C)
            this.entryWindowVal = 0; 
            updateUI()
    case C
        clearEntryWindow()
        clearOperationWindow() (C)
            operationWindow = "";
            updateUI() 
    case NEG
        if entry 0 => do nothing 
        else:
        append '-' at the beginning of entryVal 

    case =
        entryWindowVal = calculateResult
        clearOperationWindow()
        updateUI



HTML:  => Handlebars
    
    div calculator 
        div screen
            div operationWindow
            div entryWindow
        </b>
        div .buttons
            {{each buttons}}
            div .button id {{id}} 
                p {{val}}


CSS: 
.buttons {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}
   

Data Structures:







A: 
 method()  M/V/C

*/
class Model {

    calculateResult(previousVal,currentOperationSign, entryVal) {
        //
        /*
        previousVal currentOperationSign entryVal

        */
    }

}

class View {



    initUI(calculator) {
        let calculatorContainer = document.querySelector('#calculatorContainer');
        let calculatorTemplate = Handlebars.compile(document.querySelector('#calculatorTemplate').innerHTML);  
    
        calculatorContainer.innerHTML = calculatorTemplate(calculator); 
    }
}

class Controler {
    constructor(calculator) {
        this.calculator = calculator;
        this.model = new Model(); 
        this.view = new View ();
        this.currentEntry = "";
        this.currentOperation = "";
        this.currentOperationSign = "";
    }

    init() {
        this.view.initUI(this.calculator); 

        let buttonDiv = document.querySelector('.buttons');
        buttonDiv.addEventListener('click', this._delegateTask); 
    }

    _delegateTask() {
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let calculator = {
        screen: [
            {id: "operationWindow", value: 0},
            {id: "entryWindow", value: 0}
        ],
        buttons: [{id:'CE', classN:'clearEntrybtn'}, {id:'C', classN: 'clearbtn'}, {id:'NEG', classN:'negateBtn'}, {id:'/', classN: 'operationBtn'},
            {id:'7', classN: 'digitBtn'}, {id:'8', classN:'digitBtn'}, {id:'9', classN:'digitBtn'}, {id:'X', classN:'operationBtn'},
            {id:'4', classN:'digitBtn'}, {id:'5', classN:'digitBtn'}, {id:'6', classN:'digitBtn'}, {id:'-', classN:'operationBtn'},
            {id:'1', classN:'digitBtn'}, {id:'2', classN:'digitBtn'}, {id:'3', classN:'digitBtn'}, {id:'+', classN:'operationBtn'},
            {id:'0', classN:'digitBtn'}, {id:'-', classN:'operationBtn'}, {id:'%', classN:'operationBtn'}, {id:'=', classN:'resultBtn'}
        ] 
    }

    let controler = new Controler(calculator); 
    controler.init(); 


});
