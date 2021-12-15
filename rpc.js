const choices = ['rock', 'paper', 'scissors'];

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
    }

function playRound (playerSelection, computerSelection) {
// get player selection ... prompt player(call playerSelection)
// get computer selection ... call computerSelection()
// compare playconsole.log(randomNumber(1, 3));er and computer selections
// based on rules, determine and display winner
}

function game () {
// playRound 5 times
}

console.log(playerSelection());
console.log(computerPlay());
