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
    showQuestions(questions, quizContainer);{
        var output = [];
        var answers;
        for(i = 0; i < questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    
                )
            }
        }
    }
};
