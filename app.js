/*-------------------------------- Constants --------------------------------*/
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
const choices = ["rock", "paper", "scissors"]

  
/*-------------------------------- Variables --------------------------------*/
// 1) Define any variables used to track the state of the game:
//    The players choice
let playerChoice;
//    The computers choice
let computerChoice;
//    The match result - win/lose/tie
let msg;

/*------------------------ Cached Element References ------------------------*/

// 2) Define the required constants:
//    A result message - display who won that round
const resultDisplayEl = document.querySelector("#result-display")
//    We'll need a reference to a DOM element to display messages

/*-------------------------------- Functions --------------------------------*/
const play = (event) => {
    console.log(event.target);
  }
// 4) Handle generating random selections for the computer player
// 5) Compare the player choice to the computer choice, and check for a winner
// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

/*----------------------------- Event Listeners -----------------------------*/
// 3) Handle a player clicking a button
// document.querySelector("#rock").addEventListener("click", play)
// document.querySelector("#paper").addEventListener("click", play)
// document.querySelector("#scissors").addEventListener("click", play)

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", play)    
})


