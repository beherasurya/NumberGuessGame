'use strict';
const secretNumber = Math.round((Math.random() * 20)+1);
console.log(secretNumber);

let secretNumberContainer=document.querySelector(".number");
// const clickedButton=;

let number=20;
let displayScore=document.querySelector(".score");

let winningScore=0;

// let refreshButton=;
let messageContent=document.querySelector(".message");

// let highScore=document.querySelector(".highscore");

//Function for refrest button
document.querySelector(".again").addEventListener("click", ()=>{
    
    document.querySelector(".guess").value="";
    number=20;
    displayScore.textContent=number;

    document.querySelector("body").style.backgroundColor="#222";
    secretNumberContainer.style.width="15rem";

    secretNumberContainer.textContent="?";
    messageContent.textContent="Start guessing...";

});

//function for checking the number
document.querySelector(".check").addEventListener("click", ()=>{
    let enteredValue=Number(document.querySelector(".guess").value);
        if(number >0)
        {
            if(!enteredValue){
                messageContent.textContent="Input Needed"; 
             }
             else if(enteredValue === secretNumber){
                 messageContent.textContent="Correct Number";
                 document.querySelector("body").style.backgroundColor="#60b347";
                 
                 secretNumberContainer.style.width="30rem";
                 secretNumberContainer.textContent=secretNumber;

                //  document.querySelector(".highscore").textContent=number;
                if(number > winningScore )
                {
                    winningScore=number;
                    document.querySelector(".highscore").textContent=winningScore;

                }

             }else{
                 messageContent.textContent="Wrong Number";
                 number--;
                 if(number === 0){
                    messageContent.textContent="You Lost the Game";
                 }
                 displayScore.textContent=number;
             }
    
    
        }
});


