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
                return 'Tie Game. Rocks all around. No one wins!';
                break
            case 'paper':
                return 'Paper covers Rock. You lose!';
                break
            case 'scissors':
                return 'Rock smashes Scissors. You are victorious!';
                break
        }
    }
    else if (player == 'paper') {
        switch (computer) {
            case 'rock':
                return 'Paper covers Rock. You WIN!';
                break
            case 'paper':
                return 'Tie Game. Papers everywhere. No one wins!';
                break
            case 'scissors':
                return 'Scissors cut Paper. You lose!';
                break
        }
    }
    else if (player == 'scissors') {
        switch (computer) {
            case 'rock':
                return 'Rock smashes Scissors. You lose!';
                break
            case 'paper':
                return 'Scissors cut Paper. You are the Victor!';
                break
            case 'scissors':
                return 'Tie Game. Scissors verus Scissors. No one wins!';
                break
        }
    }
}

function playRound (playerSelection, computerPlay) {
// get player selection ... prompt player(call playerSelection)
// get computer selection ... call computerSelection()
// compare player and computer selections
    return compareSelections(playerSelection, computerPlay);
}

function game () {
// playRound 5 times
    
}


console.log(game());