function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

function computerPlay () {
// randomly choose between three options
    let choice = randomNumber(1,3);
    if (choice == 1) {
        choice = 'rock';
    }
    else if (choice == 2) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    return choice;
}

function playerSelection () {
// prompt player for choice
    let choice = prompt('Rock, Paper, or Scissors? Choose: ').toLowerCase();

// if input is valid, return choice
// else re-prompt player
    switch (choice) {
        case 'rock': 
            choice = 'rock';
            break;
        case 'paper': 
            choice = 'paper';
            break;
        case 'scissors': 
            choice = 'scissors';
            break;
        default:
            return playerSelection();
    }
    return choice;
}

function compareSelections (player, computer) {
// rock beats scissors
// scissors beats paper
// paper beats rock
    if (player == 'rock') {
        switch (computer) {
            case 'rock':
                tieGame = true;
                return 'Tie Game. Rocks all around. No one wins!';
                break
            case 'paper':
                computerScore++;
                return 'Paper covers Rock. You lose!';
                break
            case 'scissors':
                playerScore++;
                return 'Rock smashes Scissors. You are victorious!';
                break
        }
    }
    else if (player == 'paper') {
        switch (computer) {
            case 'rock':
                playerScore++;
                return 'Paper covers Rock. You WIN!';
                break
            case 'paper':
                tieGame = true;
                return 'Tie Game. Papers everywhere. No one wins!';
                break
            case 'scissors':
                computerScore++;
                return 'Scissors cut Paper. You lose!';
                break
        }
    }
    else if (player == 'scissors') {
        switch (computer) {
            case 'rock':
                computerScore++;
                return 'Rock smashes Scissors. You lose!';
                break
            case 'paper':
                playerScore++;
                return 'Scissors cut Paper. You are the Victor!';
                break
            case 'scissors':
                tieGame = true
                return 'Tie Game. Scissors verus Scissors. No one wins!';
                break
        }
    }
}

function playRound (playerSelection, computerPlay) {
// get player selection ... prompt player(call playerSelection)
// get computer selection ... call computerSelection()
// compare player and computer selections
    alert(compareSelections(playerSelection, computerPlay));
    
}



// --- PLAY GAME - BEST OF FIVE ROUNDS ---
let playerScore = 0;
let computerScore = 0;
let tieGame = false;

function game () {
// playRound 5 times
    playerScore = 0;
    computerScore = 0;
    tieGame = false;
    for (let i=0; i<5; i++) {
        let player = playerSelection();
        let computer = computerPlay();
        playRound(player, computer);
        if (tieGame == true) {
            i--;
            tieGame = false;
        }
    }

    if (playerScore > computerScore) {
        alert(`You win! You won ${playerScore} out of 5 rounds!`);
        console.log(`You win! You won ${playerScore} out of 5 rounds!`);
    }
    else {
        alert(`You lose! You lost ${computerScore} out of 5 rounds!`);
        console.log(`You lose! You lost ${computerScore} out of 5 rounds!`);
    }


}

console.log(game());