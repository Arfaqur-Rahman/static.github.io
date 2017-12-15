function check(){
    let question1= document.quiz.question1.value;
    let question2= document.quiz.question2.value;
    let question3= document.quiz.question3.value;
    let correct =0;
        if (question1.toLowerCase() == `dhaka`){
            correct++;
        }
        if (question2 == `Eminem`){
            correct++;
        }
        if (question3 == `Chester`){
            correct++;
        }
    let tagshow;
    var tag=[`You are awesome!`, `That was average!`, `That was below average!`, `You totally suck!`];
    var giphy=["img/awesome.gif","img/giphy.gif","img/u69Mljl.gif","img/oops.gif"];
        if (correct == 0){
             tagshow=3;
             
        }
         if (correct == 1){
             tagshow=2;
            
        }
         if (correct == 2){
             tagshow=1;
           
        }
         if (correct == 3){
             tagshow=0;
           
        }
    
    document.getElementById("after-submit").style.visibility="visible";
    document.getElementById("number-correct").innerHTML=`You've got ${correct} correct! ${tag[tagshow]}`;
    document.getElementById("picture").src= giphy[tagshow];
}
