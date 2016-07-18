var inquirer = require('inquirer');
var letter = require('./letter');
var word = require('./word');
var game = require('./game');

var guesses = 8;
var wins = 0;
var losses = 0;
var word;

var start = [
{
  type: "confirm",
  message: "Hangman: Countries around the world!",
  name: "name",
  default: true
}];

var guessLetter = [
{
  type: "input",
  name: "input",
  message: "Enter a letter to guess..."
}];

function init() {
  inquirer.prompt(start).then(function (user) {
    play();
  });
};

function play() {
  guesses = 8;
  wins;
  losses;
  wordStart();
  game();
};

function wordStart() {
  inquirer.prompt(guessLetter).then(function (user) {
    console.log(JSON.stringify(user, null, 2));
  });
};

init();