// Declaring variables needed for the score-counting array

let countPlayer = 0 ;
let countComputer = 0 ;
let score = [countPlayer,countComputer] ;

// Makes "random" choice for computer

function computerPlay() {
   computerSelection = Math.random() ;
   if (computerSelection<= 0.333) {
    computerSelection = "ROCK" ;
   } else if (computerSelection <= 0.666) {
    computerSelection = "PAPER" ;
   } else { computerSelection = "SCISSORS" ;
 }
   return computerSelection ;
}

// Asks user to make a choice 

function playerPlay() {
    let playerSelection= prompt("Rock, Paper or Scissors?") ;
    playerSelection = playerSelection.toUpperCase() ;
    return playerSelection ;
}

// TAKES computer choice and player choice functions and plays a single round

function playRound( playerSelection, computerSelection ) {
playerSelection = playerPlay()
computerSelection = computerPlay()

// alert messages will be removed in the future

if (playerSelection === computerSelection) {
     alert(`You picked ${playerSelection} and computer picked ${computerSelection}! It's a Tie!`); // to be removed //
     return score [countPlayer,countComputer] ;
} else if ( playerSelection === "SCISSORS" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}! You win!!!`) ; // to be removed
    return score = [++countPlayer,countComputer];
} else {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}! You loose.`) ; // to be removed //
    return score = [countPlayer, ++countComputer];
}
// score as returned via array
}


