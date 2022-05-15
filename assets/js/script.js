const start =document.getElementById('start');
const quiz = document.getElementsByClassName('questions_section');
const submit = document.getElementsByClassName('submit');
const results = document.getElementsByClassName('results');


// Start
start.addEventListener('click', displayQuiz);


// Create function for building the Quiz
function displayQuiz (){

    console.log('Started')
    // const output =[];

    // theQuestions.forEach(
    //     (currentQusetion) => {
    //         const answers = [];

    //         for(letter in currentQusetion.answers){

    //         }
    //     }
    // )
}

//Create function for showing the results
function displayResults(){}

//Display Quiz Immediately
displayQuiz();


submit.addEventListener('click', displayResults);


