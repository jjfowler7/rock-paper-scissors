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
        return 'lose';
    } else if (playerSelectionLower === 'paper' && computerSelection === 'Scissors') {
        return 'lose';
    } else if (playerSelectionLower === 'scissors' && computerSelection === 'Rock') {
        return 'lose';
    } else if (playerSelectionLower === computerSelection.toLowerCase()) {
        return 'tie';
    }
    return 'win';

}

function game() {
    let i = 0;
    let win = 0;
    let lose = 0;
    while (i < 5) {
        const playerSelection = prompt('Enter Rock, Paper or Scissors: ');
        const computerSelection = computerPlay();
        alert(`Computer chose ${computerSelection}.`);
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        // count wins and losses
        if (result === 'win') {
            win += 1;
        } else if (result === 'lose') {
            lose += 1;
        } 
        i++;
    }
    //compare wins and losses and return winner
    if (win > lose) {
        alert(`You win! You won ${win} rounds.` )
    } else if (lose > win) {
       alert(`You lose! You lost ${rounds} rounds.`)
    } else {
        alert('You tie!')
    }
}


console.log(game());