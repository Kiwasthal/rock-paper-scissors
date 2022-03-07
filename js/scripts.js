// Declaring variables needed for the score-counting array :

let countPlayer = 0 ; 
let countComputer = 0 ;
let score = [countPlayer,countComputer] ;

// Makes "random" choice for computer :

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

// Asks user to make a choice :

function playerPlay() {

    let playerSelection= prompt("Rock, Paper or Scissors?") ;
    playerSelection = playerSelection.toUpperCase() ;
    
    return playerSelection ;
}

// Takes computer choice and player choice functions and plays a single round :

function playRound( playerSelection, computerSelection ) {

  playerSelection = playerPlay() ;
  computerSelection = computerPlay() ;


if (playerSelection === computerSelection) {
      alert(`You picked ${playerSelection} and computer picked ${computerSelection}! It's a Tie!`) ; // to be removed //
      return score [countPlayer,countComputer] ;
} else if ( playerSelection === "SCISSORS" && computerSelection === "PAPER" || 
              playerSelection === "PAPER" && computerSelection === "ROCK" || 
                playerSelection === "ROCK" && computerSelection === "SCISSORS") {
                  alert(`You picked ${playerSelection} and the computer picked ${computerSelection}! You win!!!`) ; // to be removed
                  return score = [++countPlayer,countComputer];
} else {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}! You lose.`) ; // to be removed //
    return score = [countPlayer, ++countComputer];  //score is returned as an array 
}
}

// Creating a game function for a game of five rounds :

function game() {
    for (let i=0 ; i < 5 ; i++) {
        playRound()
    }
    if (countPlayer > countComputer) {
          alert("You win!Bravo!") ;
    } else if (countPlayer < countComputer) {
          alert("You lost!Better luck next time") ;
    } else { 
          alert("It's a tie game!") ; 
    } 
}


