alert('Please answer the following Super Bowl Trivia')
// question class with 3 attributes (the question, choices and answer)
class Question {
  constructor (text, choices, answer) {
    this.text = text
    this.choices = choices
    this.answer = answer
  }

  correctAnswer (choice) {
    return choice === this.answer
  }
}
 // var Quiz = new Quiz(questions)

class Trivia {
  constructor (questions) {
    this.questions = questions
    this.score = 0
    this.questionIndex = 0
  }
  getQuestionIndex () {                     //get questions method
    return this.questions[this.questionIndex]
  }
  gameEnded () {                           //game over method
    return this.questions.length === this.getQuestionIndex
  }
  guess (answer) {                        //answers method
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++
    }
    this.questionIndex++
  }
}
//functions to populate Question & choices on our screen
function populate () {
  if (trivia.gameEnded()) {
    showScore()
  } else {
          // show question
    var element = document.getElementById('question')
    element.innerHTML = trivia.getQuestionIndex().text
        // show choices
    var choices = trivia.getQuestionIndex().choices
    for (var i = 0; i < choices.length; i++) {
          var picks = document.getElementById('choice' + i)
          picks.innerHTML = choices[i]

          
        }
    
  }
}


var questions = [
  new Question('In 2018, how much did it cost for a 30-second commercial?', ['2.5 mil', '3 mil', '4 mil', '5 mil'], 'd'),
  new Question('What was the lowest amount of points scored in a Super Bowl?', ['6 points', '3 points', '0 points', '9 points'], 'b'),
  new Question('How long was the longest successful field goal, kicked by Steve Christie?', ['54 yards', '62 yeards', '72 yards', '48 yards'], 'a'),
  new Question('Out of the 32 NFL teams, how many teams have made it to the Super Bowl?', ['All teams', '28 teams', '25 teams', '21 teams'], 'b'),
  new Question('Second to one big holiday, Americans consume more of this on Super Bowl Sunday.', ['Sports Gear', 'TV', 'Food', 'Flowers'], 'c')
]

var trivia = new Trivia(questions)

populate()
