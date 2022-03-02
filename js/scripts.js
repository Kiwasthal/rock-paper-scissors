function computerPlay() {
   computerSelection = Math.random()
   if (computerSelection<= 0.333) {
    computerSelection = "ROCK"
   } else if (computerSelection <= 0.666) {
    computerSelection = "PAPER"
   } else { computerSelection = "SCISSORS"      }
   return computerSelection
}

function playerPlay() {
    let playerSelection= prompt("Rock, Paper or Scissors?")
    playerSelection = playerSelection.toUpperCase()
    return playerSelection
}

function playRound( playerSelection, computerSelection ) {
playerSelection = playerPlay()
computerSelection = computerPlay()

if (playerSelection === computerSelection) {
    return alert(`You picked ${playerSelection} and computer picked ${computerSelection}! It's a Tie!`)
} else if ( playerSelection === "SCISSORS" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}! You win!!!`)
} else {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}! You loose.`)
}
return playerSelection , computerSelection

}
const playerSelection = "rock"
const computerSelection = computerPlay
console.log(playRound(playerSelection,computerSelection) )