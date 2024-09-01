const { func } = require("prop-types");

var questions = [{
    question: "What is my name?",
    answers: {
        a: 'Alfie',
        b: 'Alfz',
        c: 'Alfred',
    },
    correctAnswer: "a"
}];

var quizContainer = document.getElementById("quiz")
var submitButton = document.getElementById("submit")
var resultsContainer = document.getElementById("results")

makeQuiz(questions, quizContainer, resultsContainer, submitButton)

function makeQuiz(questions, quizContainer, resultsContainer, submitButton) {
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}

function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {
        answers = [];
        for (var letter in questions[i].answers) {
            answers.push(
                "<label>" +
                "<input type='radio' name='question" + i + "' value='" + letter + "'>" +
                letter + ": " + questions[i].answers[letter] +
                "</label>"
            );
        }
        output.push(
            "<div class='question'>" + questions[i].question + "</div>" +
            "<div class='answers'>" + answers.join("") + "</div>"
        );
    }
    quizContainer.innerHTML = output.join("")

 function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers")
    var userAnswer = "";
 }

};  
