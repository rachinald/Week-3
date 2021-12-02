
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");

const clickButton = document.getElementById("button");

button.addEventListener("click", ()=> {

  if (image.style.display == "none") {
      image.style.display = "block";
      button.textContent = "hide";
  } else {
      image.style.display = "none";
      button.textContent = "show";
  }
})






let rolldice = {
    sides: 6,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }


