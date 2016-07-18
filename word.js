var checkWord = function(check) {
  this.answer = check;
  this.boxes = [];
  this.makeBoxes = function() {
    for (var i = 0; i < this.answer.length; i++) {
      var matched = new Letter(this.answer[i]);
      boxes.push(' __ ');
    }
  }
  this.ifLetterFound = function() {

  }
  this.isWordComplete = function() {

  }
  this.isFinalWord = function() {

  }
};

module.exports = checkWord;