let questions = document.getElementsByClassName('question');

 
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

    alert(results);
    
}