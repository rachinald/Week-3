// // this will generate a random number between 1 - 6
const randomNum = Math.floor(Math.random() *6) +1

// This creates the image by adding .png to dice plus random number, this is genius!
const randomDiceImage = "assets/dice" + randomNum + ".png";

const score = document.getElementById("score") 
const message = document.getElementById("message");




// function for gamePlaying (init = initialise game)

// play () = > {

// reseting score vars

// scores = [0, 0];
// roundScore = 0,
// gameplaying = true;

// randomDiceImage.style.display = "none";

// }




// function for roll button

button.addEventListener("click",()=>{

  

 // displays dice image
  document.querySelectorAll('img')[0].setAttribute("src", randomDiceImage);

  // generates a random number and puts it into the score
  // score.innerHTML = randomNum;

  // += adds the value of the right operand to a variable and assigns the result to the variable.
  // score += randomNum;

  //   message.innerHTML = "Cool! Roll again!";

  // }

  // else {

  //   message.innerHTML = "You lose!";
  // }


});



  // if (RandomNum == 1.){
  //   message.innerhtml = "You have lost!";
  
  // } else (RandomNum == >19.){
  //   message.innerhtml = "You have won!";
  // }
  
  