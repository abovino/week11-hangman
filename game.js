//Words to be used in game
var words = ['united states of america', 'italy', 'spain', 'portugal', 'china', 'japan', 'india', 'iceland', 'australia', 'germany', 'greece', 'iraq'];

var answer = words[Math.floor(Math.random() * words.length)];

function Game(){
  answer = words[Math.floor(Math.random() * words.length)];
  console.log('The word is: ' + answer);
};

module.exports = Game;