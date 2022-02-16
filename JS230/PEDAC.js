/*
//TODO: 
- attach files
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"></script>
    <script type="text/javascript" src="quiz.js"></script>
    <link rel="stylesheet" href="quiz.css">


//Goal: 
multiple quiz appl
the answer key to mark right or wrong

// Assets/ Inputs: 
- object with questions and answers [{1:1, 2: "", 3: ['', '', '']}, {...}, {...}]
- Answe Key obj {1: "", ...}

Specifics: 

Explicit: 
render the questions to the pahe
- radio buttons  (for possible answers) 
- on submit button mark: 
    -right
    - wrong
    - unanswered

- when correct answer: 
- print a 'Correcr Answer' 

- when not correct or no answer: 
 error message and correct anser
"Wrong Answer. The correct answer is: "Betelgeuse"."
"You didn't not answer this question. Correct answer is: "Douglas Adams"."

- disable submit button after the user submits the quiz 

- when Reset => clear all selected radio buttons. messages 
  and enable submit btn 

Implicit: (test to find out)
  - submit - preventDefault
  - submit first .active , when pressed .inactive  
  - reset first .incactive, on submit => .active 
  - on reset .inactive 

    UI: 

    HTML:  => Handlebars
    - rendered list
      <div heading> 
      - H1 Multiple Choice Quiz

      form
        fieldset
          Partial question field: 
          div id = question id +... =>  {each} question field 
             p => Q${1}. Who is the author of The Hitchhiker's Guide to the Galaxy?
             input radio answers
             ...
            div class errorMessage


      
        - submit button
        - reset button
    
    - info field (correct, uncorrect, unasnwered )
    - 

    CSS: 
    - H1 > 
    - Error Message - 

    - .invisible
     vissibility: hidden
    
    - .wrong answer
    red border,   

    -. correct.answer
    green border

    . active button:
    - green background 

    .inactive btn:
    - grey background 

   

  Data Structures:
  QuizData: { 
  - Error Messages 
  Error Messages: {
    correct: "message",
    uncorrect: "message ${right answer}"
    unanswered: "message ${right answer}"
    }

  Q&A: [{1:1, 2: "", 3: ['', '', '']}, {...}, {...}]
  Answer Keys: {1: "", ...}
  }

A: 
- write Handlebars template for HTML 


- add event listener to submit:    CONTROLER: 
  - on submit:
  preventDefaut(); 
  getAndDisplayAnswerStatus():
    error messages: [{1: "error message"}, {}, {}] 
    getTheAnswerStatus();  MODEL 
    display answer messages(id, error messages)  VIEW
    toggleDisableBtn(submit) VIEW
    toggleDisableBtn(reset) V

- add Venet lsietenr to Reset: C
  - on click
    resetAnsweres(): V 



- render UI:  VIEW
  - complie template with QuizData
  - declare partials for: Erro message filed and question field    

toggleDisableBtn(button) VIEW:  
  - toggle .active
  - if .disabled = true => false else true

resetAnsweres(): VIEW
  get all the inputs
  iterate through them:
    if 'checked' remove 'checked' attribute 
    get the errorMessage and set innerHTML = ""; 
    - add .invisible 



getTheAnswerStatus()  MODEL
  - get all the answers:   (FormData)
  => error messages: [{1: "error message", status: correct}, {}, {}]
  - for each answered field   
    check answerStatus(question, asnwer): 
    - ietaret through key val pairs, of form data
    - find the question in  Q&A
    - find the correct answer in  Answer Keys:
      - get the id of the question 
      - search in answers for that id   (corece to str!!)
        sttausMessage: - check status(inputAnswere, correctAnswer)
          if correct return 'corretc message'
          if not answered return 'not answered' + right answer
          if not coeerect: return 'not correct' + right answer 
      

    - display answer messages(id, error messages, status)    VIEW  
      - get DIV in the element with the given id
      - el.innerHTML = error message 
      - remove .invisible

      - if status: 
          correct 
            - add .correct_answer
          uncorrect or notanswered
            - add .wrong answer


*/