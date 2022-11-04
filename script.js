const chk_btn = document.getElementById("checkGuess");
const notifyPlayer = document.getElementById("notif");
const guessesLeft = document.getElementById("guessCount");
const rediNumTitle = document.getElementById("rediNumTitle")
const rediNums = document.getElementById("rediNums");

chk_btn.addEventListener("click", guess);

let answer = Math.floor(Math.random() * 100) +1;

let previousGuess = document.getElementById('prevGuess');
let guessLimit = 0;

let guessedTooHigh = [];
let guessedTooLow = [];
let guessedRedi = [];

function guess() {
  let numberGuessed = document.getElementById('guess').value;
  if (numberGuessed == "" || numberGuessed == " "){
   alert("Please enter a number"); 
  }
    else if (numberGuessed <1 || numberGuessed > 100) {

      console.log(numberGuessed);
      guessedRedi.push(numberGuessed)
      notifyPlayer.innerText = "It says 1 - 100 ... I'm taking an extra guess away and adding a new category for your guesses "
      guessLimit += 2;
      guessesLeft.innerText = `Chances Left: ${guessLimit}/7`;
      console.log(guessLimit)

      rediNumTitle.innerText = "Bad Guesses";
      rediNums.innerHTML = guessedRedi;
    } else if (numberGuessed <answer) {
      
  }
}

