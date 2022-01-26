let win = 0;
let lose = 0;

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

function playRound() {

    const playerSelection = prompt('Enter Rock, Paper or Scissors: ');
    const computerSelection = computerPlay();

    // Make player selection lowercase
    const playerSelectionLower = playerSelection.toLowerCase();
    // Evaluate player's selection and return winner or loser based of if the computer has the selection 
    //that will beat my hand

    if (playerSelectionLower === 'rock' && computerSelection === 'Paper') {
        lose += 1;
        return 'lose';
    } else if (playerSelectionLower === 'paper' && computerSelection === 'Scissors') {
        lose += 1;
        return 'lose';
    } else if (playerSelectionLower === 'scissors' && computerSelection === 'Rock') {
        lose += 1;
        return 'lose';
    } else if (playerSelectionLower === computerSelection.toLowerCase()) {
        return 'tie';
    }
    win += 1;
    return 'win';

}

    //compare wins and losses and return winner
    if (win >= 5) {
        alert(`You win!`)
    } else if (lose >= 5) {
       alert(`You lose!`)
    } 
 
//console.log(playRound());

/* function(playRound() {
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
} */
    
   
