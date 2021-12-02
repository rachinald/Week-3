// this will generate a random number between 1 - 6
const RandomNum = Math.floor(Math.random() *6) +1

// This creates the image by adding .png to dice plus random number, this is genius!
const firstDiceImage = "assets/dice" + RandomNum + ".png";

const score = document.getElementById("score");
const message = document.getElementById("message");


button.addEventListener("click",()=>{

  
  document.querySelectorAll('img')[0].setAttribute("src", firstDiceImage);
  
  score.innerHTML = RandomNum;


});



  // if (RandomNum == 1.){
  //   message.innerhtml = "You have lost!";
  
  // } else (RandomNum == >19.){
  //   message.innerhtml = "You have won!";
  // }
  
  