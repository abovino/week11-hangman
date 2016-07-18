function Letter(word) {
  this.correct = [];
  this.incorrect = [];
};

  this.checkWord = function(letter) {
    if (this.answer === word) {
      this.correct.push(letter);
      console.log('Word: ' + this.correct.join(' '));
    } else {
      this.incorrect.push(letter);
      console.log('Word: ' + this.incorrect.join(' '));
    };
    this.guessed = function() {
      for (var i = 0; i <this.correct.length; i++) {
        if (this.correct[i] === '_') return true;
      }
      return false;
    };
  };

  module.exports = Letter;