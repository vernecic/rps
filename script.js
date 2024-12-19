console.log("Hello World");

const choices = ["rock", "paper", "scissors"];
/*
let getComputerChoice = choices[Math.floor(Math.random() * choices.length)]; // choices[od indexa, math.floor zaokruzuje na najblizi cijeli broj, * choices.length jer ih je 3]
console.log(getComputerChoice);
*/

const getComputerChoice = function () {
  let index = choices[Math.floor(Math.random() * choices.length)];
  let compChoice = choices[index];

  return compChoice;
};

console.log(getComputerChoice);

const getHumanChoice = function () {
  let input = prompt("Please choose between rock, paper and scissors!");
  if (input !== "rock" && input !== "scissors" && input !== "paper") {
    prompt("Please choose between rock, paper and scissors!");
  }
  return input;
};

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {}
