alert('Welcome to Super Bowl Trivia')
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

var questions = [
    new questions ('In 2018, how much did it cost for a 30-second commercial?', ['2.5 mil', '3 mil', '4 mil', '5 mil'] , 'd'),
    new questions ('What was the lowest amount of points scored in a Super Bowl?', ['6 points', '3 points', '0 points', '9 points'], 'b'),
    new questions ('How long was the longest successful field goal, kicked by Steve Christie?', ['54 yards', '62 yeards', '72 yards', '48 yards'], 'a' ),
    new questions ('Out of the 32 NFL teams, how many teams have made it to the Super Bowl?', ['All teams', '28 teams', '25 teams', '21 teams'], 'b'),
    new questions ('Second to one big holiday, Americans consume more of this on Super Bowl Sunday.', ['Sports Gear', 'TV', 'Food', 'Flowers']
  ]

  