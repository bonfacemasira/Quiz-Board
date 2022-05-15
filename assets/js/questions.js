// start of  quiz test functionality
const quizData = document.querySelector('.parent');
const displayResult = document.querySelector('.results');
const marks = document.querySelector('.marks');
const submit = document.getElementById('submit');
const correctChoices = ['a', 'b', 'b', 'a', 'a'];

submit.onclick

quizData.addEventListener('submit', e => {
  e.preventDefault();

  let userChoices = [quizData.question1.value, quizData.question2.value, quizData.question3.value, quizData.question4.value, quizData.question5.value];
  let score = 0;

  userChoices.forEach((answer, index) => {
    if (answer === correctChoices[index]) {
      score += 20;
    }
  });

  let output = 0;
  const counter = setInterval(() => {
    marks.textContent = `${output}%`;
    if (output === score) {
      clearInterval(counter);
    } else {
      output++;
    }
  }, 10)
  quizData.reset();
});