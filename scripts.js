let win = 0;
let lose = 0;

//Display results
const container = document.querySelector('#results');
const winTracker = document.createElement('div');
winTracker.style.paddingTop = '20px';
const loseTracker = document.createElement('div');
loseTracker.style.paddingTop = '10px';

winTracker.classList.add('winTracker');
winTracker.textContent = `Won: ${win}`;

loseTracker.classList.add('loseTracker');
loseTracker.textContent = `Lost: ${lose}`

container.append(winTracker, loseTracker);


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

function playRound(playerSelection) {

    //const playerSelection = prompt('Enter Rock, Paper or Scissors: ');
    const computerSelection = computerPlay();

    // Make player selection lowercase
    const playerSelectionLower = playerSelection.toLowerCase();
    // Evaluate player's selection and return winner or loser based of if the computer has the selection 
    //that will beat my hand

    if (playerSelectionLower === 'rock' && computerSelection === 'Paper') {
        lose += 1;
        return loseTracker.textContent = `Lost: ${lose}`; 
    } else if (playerSelectionLower === 'paper' && computerSelection === 'Scissors') {
        lose += 1;
        return loseTracker.textContent = `Lost: ${lose}`; 
    } else if (playerSelectionLower === 'scissors' && computerSelection === 'Rock') {
        lose += 1;
        return loseTracker.textContent = `Lost: ${lose}`; 
    } else if (playerSelectionLower === computerSelection.toLowerCase()) { 
        return console.log('tie');
    }
    win += 1; 
    return winTracker.textContent = `Won: ${win}`; 

}

// Add all buttons to a node lise
const buttons = document.querySelectorAll('button');

// iterate through each button using the for each method to add a click listener
buttons.forEach((button) => {
    button.addEventListener('click', () =>  {
        playRound(button.id);
        if (win === 5) {
            alert(`You win. You've won ${win} rounds!`);
        } else if (lose === 5) {
           alert(`You lose! You've lost ${lose} rounds!`); 
        } 
    });
}); 




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
    
   
