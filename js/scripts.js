let countPlayer = 0
let countComputer = 0
let score = [countPlayer,countComputer]

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
     alert(`You picked ${playerSelection} and computer picked ${computerSelection}! It's a Tie!`)
     return score [countPlayer,countComputer]
} else if ( playerSelection === "SCISSORS" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}! You win!!!`)
    return score = [++countPlayer,countComputer]
} else {
    alert(`You picked ${playerSelection} and the computer picked ${computerSelection}! You loose.`)
    return score = [countPlayer, ++countComputer]
}
}

console.log(score)
