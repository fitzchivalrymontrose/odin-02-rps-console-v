const choices = ['rock', 'paper', 'scissors'];



function compareSelections (player, computer) {
// rock beats scissors
// scissors beats paper
// paper beats rock
}

function computerPlay () {
// randomly choose between three options
// return result
}

function playerSelection () {
// prompt player for choice
    let choice = prompt('Rock, Paper, or Scissors? Choose: ').toLowerCase();

// if input is valid, return choice
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

// else give error message and re-prompt player
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

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
console.log(randomNumber(1, 3));
let playerChoice = playerSelection();
console.log(playerChoice);