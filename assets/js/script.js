let questions = document.getElementsByClassName('question');
let marks = document.querySelector('.marks');


function reloadQuiz(){
    location.reload()
}
 
function submit(){

    let results  = 0;
    if (document.getElementById('cr1').checked){
     results +=20;

    }
    
    if (document.getElementById('cr2').checked){
        results +=20;
       }
    
    if (document.getElementById('cr3').checked){
        results +=20;
   
       }
    
    if (document.getElementById('cr4').checked){
        results +=20;
       }
    
    if (document.getElementById('cr5').checked){
        results +=20;
       }

    marks.textContent = results + '%';
}

