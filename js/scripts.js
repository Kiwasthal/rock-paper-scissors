// Declaring variables needed for the score-counting array :

let countPlayer = 0 ; 
let countComputer = 0 ;
let score = [countPlayer,countComputer] ;

// Reference the three buttons we need to make a player choice

let btnLeft = document.getElementById('jolteon');
let btnCenter = document.getElementById('vaporeon');
let btnRight = document.getElementById('flareon');


// Makes "random" choice for computer :

function computerPlay() {
   computerSelection = Math.random() ;
   if (computerSelection<= 0.333) {
         computerSelection = "jolteon" ;
   } else if (computerSelection <= 0.666) {
                computerSelection = "flareon" ;
   } else { computerSelection = "vaporeon" ;
 }
   return computerSelection ;
}

// // // Asks user to make a choice :

// // function playerPlay() {
// //       btnLeft.addEventListener ('click' , function() {

// //       }) ;
// }
//When player presses a button fire-up consequece of playRound

btnLeft.addEventListener ('click' , () => {
      playRound( "jolteon" , );
})

btnCenter.addEventListener('click', () => {
      playRound("vaporeon" , );
})      
      

btnRight.addEventListener('click', () => {
      playRound( "flareon" , );
})      


// Takes computer choice and player choice functions and plays a single round :

function playRound( playerSelection, computerSelection ) {

  
  computerSelection = computerPlay() ;


if (playerSelection === computerSelection) {
      document.getElementById('display').textContent = `Both trainers picked ${computerSelection}. It's a tie!`;
      return score [countPlayer,countComputer] ;
} else if ( playerSelection === "jolteon" && computerSelection === "vaporeon" || 
              playerSelection === "vaporeon" && computerSelection === "flareon" || 
                playerSelection === "flareon" && computerSelection === "jolteon") {
                  document.getElementById('display').textContent = `You picked ${playerSelection} and opponent picked ${computerSelection}. You win!`
                  document.getElementById('playerScore').textContent = ++countPlayer
                  return score = [countPlayer,countComputer];
} else {
    document.getElementById('display').textContent = `You picked ${playerSelection} and opponent picked ${computerSelection}. You lose!`
    document.getElementById('computerScore').textContent = ++countComputer
    return score = [countPlayer, countComputer];  //score is returned as an array 
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


