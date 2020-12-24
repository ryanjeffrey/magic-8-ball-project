$(document).ready(function(){
	var question;

var eightBall = {};
eightBall.listOfAnswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it - yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy - try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
 
eightBall.askQuestion = function (question) {
	var randomNumber = Math.random();
 
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
 
	var randomIndex = Math.floor(randomNumberArray);
 
	var answer = this.listOfAnswers[randomIndex];
	
	console.log(question);
	console.log(answer);

	$("#answer").text(answer)

};

function questionButton() {
	question = prompt("I can tell your future with little to some level of accuracy. Try me out by asking a Yes or No question.");
	eightBall.askQuestion(question);
}

$("#questionButton").click(questionButton);

});