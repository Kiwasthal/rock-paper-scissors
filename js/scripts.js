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

// Takes computer choice and player choice functions and plays a single round :
// Alters HTML texts to match score and displays

function playRound( playerSelection, computerSelection ) {

  
  computerSelection = computerPlay() ;


if (playerSelection === computerSelection) {
      document.getElementById('display').textContent = `Both trainers picked ${computerSelection}. It's a tie!`;
      
} else if ( playerSelection === "jolteon" && computerSelection === "vaporeon" || 
              playerSelection === "vaporeon" && computerSelection === "flareon" || 
                playerSelection === "flareon" && computerSelection === "jolteon") {
                  document.getElementById('display').textContent = `You picked ${playerSelection}
                   and opponent picked ${computerSelection}. You win!`;
                  document.getElementById('playerScore').textContent = ++countPlayer ;                 
} else {
    document.getElementById('display').textContent = `You picked ${playerSelection}
     and opponent picked ${computerSelection}. You lose!` ;
    document.getElementById('computerScore').textContent = ++countComputer ;
}
//Checks if a score equals to 5 and displays winner of the game.Also end game

if (countPlayer === 5 ) {
      document.getElementById('display').textContent = " You win the battle!Reload to try again";
      //Remove buttons when game ends
      btnLeft.remove() ;
      btnRight.remove() ;
      btnCenter.remove() ;
     
} else if (countComputer === 5) {
      document.getElementById('display').textContent = " Opponent trainer wins.Reload to try again"; 
      //remove buttons when game ends
      btnLeft.remove() ;
      btnRight.remove() ;
      btnCenter.remove() ;
}}

// Plays round when user clicks a button
// playRound arguement set according to corresponding button pressed

btnLeft.addEventListener ('click' , () => {
      playRound( "jolteon" , );
})

btnCenter.addEventListener('click', () => {
      playRound("vaporeon" , );
})      
      

btnRight.addEventListener('click', () => {
      playRound( "flareon" , );
})      

