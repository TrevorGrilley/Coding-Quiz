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


// Clicking "Start Quiz" button begins the quiz
startBtn.onclick = startQuiz