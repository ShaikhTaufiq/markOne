
var readlineSync = require("readline-sync");

var score = 0;

var questionOne = {
  question:"Where does Taufiq live? ",
  answer: "Mumbai",
}
var questionTwo = {
  question:"Where does Taufiq work? ",
  answer: "Jio",
}

var questionThree = {
  question:"Is he a Marvel or DC fan? ",
  answer: "Marvel",
}

var questionFour = {
  question:"Does he like working out? ",
  answer: "yes",
}

var questions = [questionOne, questionTwo, questionThree, questionFour];

var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+ userName+" to DO YOU KNOW Taufiq!!! \n");

function play(questionObject){
  var userAnswer = readlineSync.question(questionObject.question);

  if(userAnswer.toUpperCase === questionObject.answer.toUpperCase){
    console.log("You're right!!");
    score++;
  }else{
    console.log("You're wrong!!");
    score--;
  }

  console.log("current score: "+score);
  console.log("--------------------------");
}

for(var i=0; i < questions.length; i++){
  play(questions[i]);
}

console.log("You scored: "+score);
console.log("Check out the high scores, if you should be there ping me and I'll update it");

var highScore = [
  {
    name: "Taufiq",
    score: 4,
  },
  {
    name: "Dom",
    score: 3,
  }
]

highScore.map(score => console.log(score.name+" : "+score.score));
