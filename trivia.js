alert('Welcome to Super Bowl Trivia')
//question class with 3 attributes (the question, choices and answer)
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
