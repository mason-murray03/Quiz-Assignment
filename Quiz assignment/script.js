const questions = [
    {
        question: "What is the correct syntax to declare a variable in JavaSript?",
        answers: [
            {text: "let myVariable", correct: true},
            {text: "let = myVaribale", correct: false},
            {text: "let - myVariable", correct: false},
            {text: "myVaribale let", correct: false},
        ]
    },
    {
        question: "Which array method adds an element to the end of an array?",
        answers: [
            {text: "push()", correct: true},
            {text: "pop()", correct: false},
            {text: "shift()", correct: false},
            {text: "unshift()", correct: false},
        ]
    },
    {
        question: "How do you write a conditional statement in JavaScript?",
        answers: [
            {text: "if(condition) {}", correct: true},
            {text: "if condition {}", correct: false},
            {text: "if condition then {}", correct: false},
            {text: "if{condition}", correct: false},
        ]
    },
    {
        question: "Which loop will execute at least once if the condition is false?",
        answers: [
            {text: "for loop", correct: false},
            {text: "while loop", correct: false},
            {text: "do... while loop", correct: true},
            {text: "foreach loop", correct: false},
        ]
    },
    {
        question: "How do you create an array in JavaScript?",
        answers: [
            {text: "let arr = []", correct: true},
            {text: "let arr = {}", correct: false},
            {text: "let arr = ()", correct: false},
            {text: "let arr = <>", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next Question";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    if(currentQuestionIndex === questions.length - 1){
        nextButton.innerHTML = "Submit Quiz";
    }else{
        nextButton.innerHTML = "Next Question";
    }
}

function resetState(){
    nextButton.disabled = true;
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.disabled = false;
}

startQuiz();

