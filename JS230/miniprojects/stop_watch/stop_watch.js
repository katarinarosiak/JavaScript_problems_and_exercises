class Model {
    constructor(timer) {
        this.intervalId = null;


    }
    setClock(timer) {

        timer.centisenconds++;

        if (timer.centisenconds > 99) {
            timer.seconds++;
            timer.centisenconds = 0;
        }

        if (timer.seconds > 59) {
            timer.minutes++;
            timer.seconds = 0;
        }

        if (timer.minutes > 59) {
            timer.hours++;
            timer.minutes = 0;
        } 
    }

}

class View {

    initUI(timer) {

        let timerDiv = document.querySelector('#timerDiv');
        let timerTemplate = Handlebars.compile(document.querySelector('#timerTemplate').innerHTML);
        

        timerDiv.innerHTML = timerTemplate(this._addLeadingZeros(timer)); 
    }

    _addLeadingZeros(timer) {
        timer = Object.assign({}, timer); 
        for (let key in timer) {
            timer[key] = this._addZero(timer[key]);
        }
        return timer; 
    }

    _addZero(time) {
        let timeStr = String(time); 
        return timeStr.length === 1 ? '0' + timeStr : timeStr;
    }

    updateUI(timer) {
        for (let key in timer) {
            let p = document.querySelector(`#${key}`);
            p.textContent = this._addZero(timer[key]);  
         }
    }

    toggleStartStop() {
        let button = document.querySelector('#startStop'); 
        if (button.textContent === 'Start') {
            button.textContent = 'Stop';
        } else {
            button.textContent = 'Start';
        }
    }

    resetUI(timer) {
        for (let key in timer) {
            let p = document.querySelector(`#${key}`); 
            p.textContent = this._addZero(timer[key]);
        };
    }
}

class Controler {
    constructor() {
        this.timer = {
            hours: 0,
            minutes: 0, 
            seconds: 0,
            centisenconds: 0
        };
        this.running = false;
        this.model = new Model(this.timer);
        this.view = new View();  
 
    }
    _startCounter() {
        this.running = true; 
        this.intervalId = setInterval(() => { 
            this.model.setClock(this.timer);
            this.view.updateUI(this.timer);
        }, 10);
    }

    _stopCounter() {
        clearInterval(this.intervalId); 
        this.running = false; 
    }

    _reset() {
        for (let key in this.timer) {
            this.timer[key] = 0; 
        }

        this._stopCounter();
        this.view.resetUI(this.timer); 
    }

    init() {
        this.view.initUI(this.timer); 

        let startStopBtn = document.querySelector('#startStop'); 
        startStopBtn.addEventListener('click', event => {
            if (this.running) {
                this._stopCounter();
                this.view.toggleStartStop(); 
            } else {
                this._startCounter();
                this.view.toggleStartStop();  
            }
        }); 

        let reset = document.querySelector('#reset');
        reset.addEventListener('click', this._reset.bind(this)); 
    }
}

document.addEventListener('DOMContentLoaded', () => {


    let controler = new Controler();
    controler.init(); 

}); 