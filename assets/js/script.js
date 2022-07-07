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
  {
    title: "What does HTML stand for?",
    choices: ["Hotmail", "Hyperlink", "Huge Text Marketing Language", "Hyper Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    title: "What is the correct way to write a comment in CSS?",
    choices: ["*/this is a comment/* ", "/* this is a comment */", "!this is a comment!", "$this is a comment$"],
    answer: "/* this is a comment */"
  },
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
  {
    title:
      "Which of the following property is used to add or subtract space between the letters that make up a word?",
    choices: [" letter-spacing", "word-spacing", "color", "direction"],
    answer: " letter-spacing"
  },
  {
    title:
      "Which of the following property specifies the width of a border?",
    choices: ["border-bottom-color", "border-style", "border-color", "border-width"],
    answer: "border-width"
  }
];