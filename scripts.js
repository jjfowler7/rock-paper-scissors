function computerPlay() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
        default:
            return '';
    }

}

function playRound(playerSelection, computerSelection) {
    // Make player selection lowercase
    const playerSelectionLower = playerSelection.toLowerCase();
    // Evaluate player's selection and return winner or loser based of if the computer has the selection 
    //that will beat my hand
    if (playerSelectionLower === 'rock' && computerSelection === 'Paper') {
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelectionLower === 'paper' && computerSelection === 'Scissors') {
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelectionLower === 'scissors' && computerSelection === 'Rock') {
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelectionLower === computerSelection.toLowerCase()){
        return console.log(`It's a tie!`);
    }
    return console.log(`You win! ${playerSelection} beats ${computerSelection}!`);

}

const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));