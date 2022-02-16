
class Model {
    constructor(quizData) {
        this.quizData = quizData; 

    }
    getTheAnswerStatus() {

        let form = document.querySelector("form");
        let dataEntries = [...new FormData(form).entries()];
        let answers = [];
        
        this.quizData.questions.forEach((question, idx) => {
            answers.push(this._isAnswered(question, dataEntries));
        });
        
        return answers; 
    }

    _isAnswered(question, dataEntries) {  

        for (let KeyVal of dataEntries) { 
            let id = Number(KeyVal[0].match(/[0-9]+/g)[0]); 
            if (question.id === id) { 
                let isCorrectAnswer = this.quizData.answerKeys[id] === KeyVal[1];
                return {
                    id,
                    status: isCorrectAnswer ? 'Correct Answer' : `Incorrect Answer. The correct answer is "${this.quizData.answerKeys[id]}"`,
                    isCorrect: isCorrectAnswer
                }; 
            } 
        }
        return {
            id: question.id,
            status: `You didn't answer this question. Correct answer is: "${this.quizData.answerKeys[question.id]}"`,
            isCorrect: false
        };
    }
};


class View {
    constructor(quizData) {
        this.quizData = quizData; 
    }

    initUI () {

        let quizFormContainer = document.querySelector('#quizFormContainer');
        let questionField = document.querySelector("#questionField").innerHTML; 

        Handlebars.registerPartial('questionField', questionField);

        let formHTML = Handlebars.compile(document.querySelector("#quizForm").innerHTML);   
        let formtemplate = formHTML(this.quizData); 

        console.log(formtemplate); 
        quizFormContainer.innerHTML = formtemplate;

    }

    displayAnswerMessages(answerStatus) {

        answerStatus.forEach(answer => {
            let div = document.querySelector(`#answerMessage${answer.id}`);
            div.textContent = answer.status;
            if (answer.isCorrect) {
                div.classList.add("correctAnswer"); 
            } else {
                div.classList.add("wrongAnswer"); 
            }
        })

        this._toggleDisableBtn(document.querySelector('#submit'));
        this._toggleDisableBtn(document.querySelector('#reset'));
    }

    _toggleDisableBtn(button) {
        button.classList.toggle('active');
    }

    resetAnswers() {
        let inputs = [...document.querySelectorAll("input")];

        inputs.forEach(input => {
            if (input.type !== 'submit') {
                input.checked = false; 
                let mainDiv = input.parentNode.parentNode;
                let messageDiv = mainDiv.querySelector(".answerMessage");
                messageDiv.innerHTML = "";
                messageDiv.classList.add("invisible"); 
            }
        });  
    }
};


class Controler {
    constructor(quizData) {
        this.model = new Model(quizData); 
        this.view = new View(quizData); 

        this.init();
    }

    init() {
        this.view.initUI(); 

        let form = document.querySelector('#form');

        form.addEventListener('submit', this._getAndDisplayAnswerStatus.bind(this));
        document.querySelector('#reset').addEventListener('click', this.view.resetAnswers.bind(this));  
    }

    _getAndDisplayAnswerStatus(event) {
        event.preventDefault();
        
        let answerStatus = this.model.getTheAnswerStatus();
        this.view.displayAnswerMessages(answerStatus); 
    
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const quizData = {  
        AnswerMessages: {
          '1': "message",
          '2': "Wrong Answer. The correct answer is:",
          '0': "message ${right answer}"
          },
        questions: [
            {
              id: 1,
              description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
              options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
            },
            {
              id: 2,
              description: 'Which of the following numbers is the answer to Life, the \
                            Universe and Everything?',
              options: ['66', '13', '111', '42'],
            },
            {
              id: 3,
              description: 'What is Pan Galactic Gargle Blaster?',
              options: ['A drink', 'A machine', 'A creature', 'None of the above'],
            },
            {
              id: 4,
              description: 'Which star system does Ford Prefect belong to?',
              options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
            },
          ],
        answerKeys: { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' }
    };
    
    let controler = new Controler(quizData); 


}); 