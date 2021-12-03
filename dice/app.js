const score = document.getElementById("score");
const message = document.getElementById("message");

// variable that holds a number
// this can't be in the event listener because it will only change when we change it so when you click the button you add the random number to it but it never resets the score variable, only adds to it
let totalScore = 0;




// function for roll button

button.addEventListener("click",()=>{

  // // this will generate a random number between 1 - 6
const randomNum = Math.floor(Math.random() *6) +1;

// This creates the image by adding .png to dice plus random number, this is genius!
const randomDiceImage = "assets/dice" + randomNum + ".png";


 // displays dice image
  document.querySelectorAll('img')[0].setAttribute("src", randomDiceImage);
 

  // += adds the value of the right operand to a variable and assigns the result to the variable.
    // so this code adds the randomNum's together:
  totalScore += randomNum;
  score.innerHTML = totalScore;
  
  

if (randomNum == 1){
    message.innerHTML = "You have lost! reloading game...",
    setTimeout(function(){ location.reload(); }, 1300);
    
  
} else if (totalScore > 19) 
    message.innerHTML = "You have won! reloading game...",
    setTimeout(function(){ location.reload(); }, 1300);
    
  
    

});
