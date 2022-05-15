const theQuestions = [
    {
        question:"1. What is the short form of HyperText Markup Language?",
        a: "HTML",
        b:"HMLT",
        c:"MLHT",
        correct: "a",
    },

    {
        question:"2. What is the other name for Javascript?",
        a: "ECMAscript",
        b:"JS",
        c:"I don't know",
        correct: "b",
    },

    {
        question:"3. Is C++ a low level language?",
        a: "Yes",
        b:"No",
        correct: "b",
    },

    {
        question:"4. How do you call a function named myFunction?",
        a: "myFunction()",
        b:"call myFunction()",
        c:"call function myFunction()",
        correct: "a",
    },

    {
        question:"5. How do you create a function in JavaScript?",
        a: "function myFunction()",
        b:"function=myFunction()",
        c:"function:myFunction()",
        correct: "a",
    }
];

const start =document.getElementsByClassName('start');
const quiz = document.getElementsByClassName('questions_section');
const submit = document.getElementsByClassName('submit');
const results = document.getElementsByClassName('results');


// Start

start.addEventListener('click', displayQuiz);


// Create function for building the Quiz
function displayQuiz (){

    const output =[];

    theQuestions.forEach(
        (currentQusetion) => {
            const answers = [];

            for(letter in )
        }
    )
}

//Create function for showing the results
function displayResults(){}

//Display Quiz Immediately
displayQuiz();


submit.addEventListener('click', displayResults);


