const bodyRef = document.getElementById("bodyRef");

/*Condense later */
const celeDiv1 = document.getElementById("celebrate1")
const celeDiv2 = document.getElementById("celebrate2")
const celeDiv3 = document.getElementById("celebrate3")

const containerRef =document.getElementById

const input = document.getElementById("guess")
const chk_btn = document.getElementById("checkGuess");
const notifyPlayer = document.getElementById("notif");
const guessesLeft = document.getElementById("guessCount");

/* H2 and P tags */
const numbersLower = document.getElementById("numbersGuessedLower");
const numbersHigher = document.getElementById("numbersGuessedHigher");
const badGuessTitle = document.getElementById("badGuessTitle");
const badGuessField =document.getElementById("badGuesses");
const rediNumTitle = document.getElementById("rediNumTitle")
const rediNums = document.getElementById("rediNums");

let answer = Math.floor(Math.random() * 100) +1;

let previousGuess = document.getElementById('prevGuess');
let guessLimit = 7;
let guessCount = 7;

let guessedTooHigh = [];
let guessedTooLow = [];
let guessedRedi = [];

chk_btn.addEventListener("click", guess);

function guess() {  
  let numberGuessed = document.getElementById('guess').value;
if (guessCount != 0) {
  if (numberGuessed == "" || numberGuessed == " " || numberGuessed == "  " || numberGuessed == "   ") {
   alert("Please enter a number");
   console.log(answer);

  }
    else if (numberGuessed <1 || numberGuessed > 100) {
        guessedRedi.push(numberGuessed)      

        updateText(numberGuessed);

        badGuessTitle.classList.add("border")
        badGuessField.classList.add("rediNums");

        notifyPlayer.innerText = "It says 1 - 100 ... I'm taking a guess away and adding a new category for your guesses "
        
        badGuessTitle.innerText = "Bad Guesses";
        badGuessField.innerHTML = guessedRedi;
      
        console.log(answer);

    } else if (numberGuessed < answer && numberGuessed >= 1) {
        guessedTooLow.push(numberGuessed);

        updateText(numberGuessed);
        
        notifyPlayer.innerText = "The number you guessed was too low";
        numbersLower.innerHTML = guessedTooLow;

        console.log(answer);
    } 
        else if (numberGuessed > answer) {    
        guessedTooHigh.push(numberGuessed);

        updateText(numberGuessed);

        notifyPlayer.innerText = "The number you guessed was too High";
        numbersHigher.innerHTML = guessedTooHigh;

        console.log(answer);
    } 
      else if (numberGuessed == answer) {
        updateText(numberGuessed)

        bodyRef.classList.add("win"); 

        celeDiv1.classList.add("firework");
        celeDiv2.classList.add("firework");       
        celeDiv3.classList.add("firework");
      
        Win()
    }
  }
  else {
    updateText
    guessCount = 0;
    Lose()
  }
}

function Win() { 
  
  chk_btn.removeEventListener("click", guess);
  
  notifyPlayer.innerText = `NICE JOB! the number was ${answer}, You got it in ${guessLimit - guessCount} tries.`
  
  chk_btn.innerText = `Play Again`;
 
  chk_btn.addEventListener("click", restart);
}

function Lose() {  
  
  chk_btn.removeEventListener("click", guess);

  guessesLeft.innerText = `Chances Left: ${guessCount}/${guessLimit}`;
  notifyPlayer.innerText = `You Lose`;
  chk_btn.innerText = `Try Again`;

  chk_btn.addEventListener("click", restart);
}


function restart(){

  bodyRef.classList.remove("win"); 

  celeDiv1.classList.remove("firework");
  celeDiv2.classList.remove("firework");       
  celeDiv3.classList.remove("firework");

  answer = Math.floor(Math.random() * 100) + 1;

  guessedTooHigh = [];
  guessedTooLow = [];
  guessedRedi = [];
  
  input.value = "";

  updateText();

  guessCount = 7;
  console.log(guessCount);
  notifyPlayer.innerText = "";
  guessesLeft.innerText = `Chances Left: ${guessCount}/${guessLimit}`;  
  chk_btn.innerText = `Check`;

  chk_btn.removeEventListener('click', restart)
  chk_btn.addEventListener('click', guess)  
}

function updateText(numberGuessed){
  guessCount -= 1;
  previousGuess.innerText = `Previous Guess: ${numberGuessed}`;
  guessesLeft.innerText = `Chances Left: ${guessCount}/${guessLimit}`;

  numbersHigher.innerHTML = guessedTooHigh;
  numbersLower.innerHTML = guessedTooLow;
  badGuessField.innerHTML = guessedRedi;
}

