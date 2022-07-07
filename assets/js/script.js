//DOM Element Variables

var questionEl = document.getElementById("quiz-questions");
var choicesEl = document.getElementById("choices");
var responseEl = document.getElementById("response");
var startBtn = document.getElementById("start-quiz");
var submitBtn = document.getElementById("submit");
var timeEl = document.getElementById("time");
var initialsEl = document.getElementById("initials");
var currentQuestion;
var currentQuestionIndex = 0;

// When presented with a question, you are presented with list of answers
var questions = [

  //Question 1
  {
    title: "What does HTML stand for?",
    choices: ["Hotmail", "Hyperlink", "Huge Text Marketing Language", "Hyper Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },

  //Question 2
  {
    title: "What is the correct way to write a comment in CSS?",
    choices: ["*/this is a comment/* ", "/* this is a comment */", "!this is a comment!", "$this is a comment$"],
    answer: "/* this is a comment */"
  },

  //Question 3
  {
    title: "Function and Var are known as ___.",
    choices: [
      "declaration statements",
      "arrays",
      "text styling",
      "position statements"
    ],
    answer: "declaration statements"
  },

  //Question 4
  {
    title:
      "Which of the following property is used to add or subtract space between the letters that make up a word?",
    choices: [" letter-spacing", "word-spacing", "color", "direction"],
    answer: " letter-spacing"
  },

  //Question 5
  {
    title:
      "Which of the following property specifies the width of a border?",
    choices: ["border-bottom-color", "border-style", "border-color", "border-width"],
    answer: "border-width"
  }
];

//Timer Variables
var questionIndex = 0;
var time = questions.length * 15;
var currentTime;

// Function to start the game
function startQuiz() {

     //Sets time interval
     setTime();
    //El for start screen
    var startScreenEl = document.getElementById("start-screen");

    console.log("this is my time inside startquiz:", time);

    //Start screen is hidden
    startScreenEl.setAttribute("class","hidden");

    //Questions and answers are properly displayed
    questionEl.removeAttribute("class");   

    //Select a new question
    newQuestion();
}

//Sets interval for time
function setTime() {
  currentTime = setInterval(function() {
  time--;
  timeEl.textContent = time;

  //Check to see if player has time remaining
  if (time <= 0) {
          //if player has no time remaining end quiz
          endQuiz();
      }
  }, 1000);
}

function newQuestion() {
  //First question from list of questions
  currentQuestion = questions[currentQuestionIndex];

  //Title changes to current question
  var titleEl = document.getElementById("quiz-questions-title")
  titleEl.textContent = currentQuestion.title;

  //Clears old questions
  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function(choice, i) {
  //Create buttons for each answer choice
      var multipleChoice = document.createElement("button");
      multipleChoice.setAttribute("class", "choices");
      multipleChoice.setAttribute("value", choice);

      multipleChoice.textContent = i + 1 + ". " + choice;

      //Creates an event listner for each button
      multipleChoice.onclick = chosenAnswer;
      
      //After player chooses question, answer is displayed on page
      choicesEl.appendChild(multipleChoice);
});
}


//How program responds to selected answer
function chosenAnswer() {
  console.log(this.value)
  console.log(questionIndex)
  console.log(questions[questionIndex].answer)
    //If answer was answered incorrectly 15 secs are deducted.
        if (this.value !== questions[currentQuestionIndex].answer) {
        console.log(this.value)


    //15 second deduction for wrong answer
    time -=15;    

    //No deductions for correct answer
    if (time < 0) {
        time = 0;
    }
    
    //Time adjusts if right/wrong answer was selected
    timeEl.textContent = time;

    //Response if incorrect was was selected
    responseEl.textContent = 'Incorrect!';

    } else { 
    //Response if correct answer was selected
    responseEl.textContent = "Correct!"
    }
    //Displays on screen if answer was right/wrong
    responseEl.setAttribute("class", "response");

    setTimeout(function(){
        responseEl.setAttribute("class", "response hidden");
    }, 1000);

    //Proceed to the next question
    currentQuestionIndex++;

    //When there are no more questions quiz ends
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        newQuestion();
    }
}


//Function to end the game 
function endQuiz() {
  //Stops execution of action at set interval
  clearInterval(currentTime);

 //Hide Questions
 questionEl.setAttribute("class", "hidden")

 //End Screen
 let endScreenEl = document.getElementById("game-over")

 endScreenEl.removeAttribute("class");

 //Final score when quiz is finished
 let finalScoreEl = document.getElementById("final-score");
 finalScoreEl.textContent = time;
}

function saveHighscores() {
  //Initials are saved when input by player
  var initials = initialsEl.value;

  //Ensure the box contains a value
  if (initials !== "") {
      //Request the saved scores from the local storage
      var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

      //When new score happens, input initials
      var newScore = {
          score: time,
          initials: initials
      };

      //Save to local storage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));

      ///When clicked, brought to page of highscores
      window.location.href = "highscores.html"
  }
}


// Click Start Quiz button to start the quiz
startBtn.onclick = startQuiz