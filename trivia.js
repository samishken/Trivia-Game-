// alert('Please answer the following Super Bowl Trivia Questions\n\n#flyeaglesfly')
// question class with 3 attributes for questions, choices and answers)
// an `correctAnswer` method that adds Correct Answers to score array.
class Question {
  constructor (text, choices, answer) {
    this.text = text
    this.choices = choices
    this.answer = answer
  }
  correctAnswer (choice) {                       // check if User answered correctly
    console.log('here', choice)
    return choice === this.answer
  }
 }
 // Trivia class which generates questions and choices, count questions,
 // move to next question while keeping the score or correct answers
 

 class Trivia {
  constructor (questions) {
    this.questions = questions
    this.score = 0
    this.questionIndex = 0
  }
  getQuestionIndex () {                                           // get the index of current question & choices
    return this.questions[this.questionIndex]
  }
  gameEnded () {                                                 // check if Trivia is ended or not
    return this.questions.length === this.questionIndex
  }
  guess (answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score += 1                                           // if user answered add score
    }
    this.questionIndex++                                         // go to the next question
  }
 }
 // functions to populate Question & choices on our screen
function populate () {
  if (trivia.gameEnded()) {
    showScores()         //when reach the end of the game go to showScores function
  } else {               // otherwise upload the next Question and choices
          // show question
    var uploadQuestions = document.getElementById('question')
    uploadQuestions.innerHTML = trivia.getQuestionIndex().text
        // show choices
    var uploadChoices = trivia.getQuestionIndex().choices
    for (var i = 0; i < uploadChoices.length; i++) {
      var picks = document.getElementById('choice' + i)
      picks.innerHTML = uploadChoices[i]

      guess('button' + i, uploadChoices[i])
    }
    counter()
  }
}

function guess (id, guess) {
  var button = document.getElementById(id)
  button.onclick = function () {
    trivia.guess(guess)
    populate()    // see if the game ended or not
  }
}

 // counting questions answered and remaining questions
function counter () {
  var currentQuestionNumber = trivia.questionIndex + 1
  var progress = document.getElementById('counter')
  progress.innerHTML = 'Question ' + currentQuestionNumber + ' of ' + trivia.questions.length
}

   // function show score at the end
function showScores () {
  var endOfGame = '<h1>Fly Eagles Fly</h1>'
  endOfGame += "<h2 id='score'> Your Score: " + trivia.score + '</h2>'
  var finalResult = document.getElementById('trivia')
  finalResult.innerHTML = endOfGame
}

 // Questions, choices and answers array.
var Questions = [
  new Question('In 2018, how much did it cost for a 30-second commercial?', ['2.5 mil', '3 mil', '4 mil', '5 mil'], '5 mil'),
  new Question('What was the lowest amount of points scored in a Super Bowl?', ['6 points', '3 points', '0 points', '9 points'], '3 points'),
  new Question('How long was the longest successful field goal in Super Bowl?', ['54 yards', '62 yeards', '72 yards', '48 yards'], '54 yards'),
  new Question('Out of the 32 NFL teams, how many teams have made it to the Super Bowl?', ['All teams', '28 teams', '25 teams', '21 teams'], '28 teams'),
  new Question('Second to one big holiday, Americans consume more of this on Super Bowl Sunday.', ['Sports Gear', 'TV', 'Food', 'Flowers'], 'Food')
]
 // Trivia controller object
var trivia = new Trivia(Questions)

populate()
