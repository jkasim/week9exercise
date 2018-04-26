var quizApp = [
	
	{
		question: "How many rings does Kobe Bryant have?",
		answer: 5
	},
	
	{
		question: "What super hero is from Wakanda?",
		answer: "Black Panther"
	},
	{
		question: "Which animal is bigger, Tiger? or Lion?",
		answer: "Tiger"
	},
	{
		question: "What is the number for pie?",
		answer: 3.14
	},
	{
		question: "What NBA player has the title 'Fear the beard' ?",
		answer: "James Harden"
	},
	{
		question: "What is the new popular currency on the stock market?",
		answer: "Cryptocurrency"
	},
	{
		question: "What country is Drake from?",
		answer: "Canada"
	},
	{
		question: "Who is the CEO of Tesla?",
		answer: "Elon Musk"
	},
	{
		question: "What city has the Space Needle?",
		answer: "Seattle"
	},
	{
		question: "What is the name of the best coding boot camp?",
		answer: "Codify Academy"
	}
	
];

//looping through questions

for(var i = 0; i < quizApp.length; i++) {

	var question = quizApp[i].question;
	var newElement = document.getElementById("question" + [i]);
		console.log(question, newElement);
		newElement.textContent = question;
}

//storing results when user submits
function testResults() {

	var correct = 0;
	var incorrect = 0;

//loop through questions array 

for(var i = 0; i < quizApp.length; i++) {
	//storing correct answer
	var answer = quizApp[i].answer;
	
	//storing user answer
	var guess = document.getElementById("answer" + [i]).value;

	//store element to add a class if correct or incorrect
	var questionSpot = document.getElementById("question" + [i]);

	//see if answer matches up
	if(answer == guess) {
		//update class
		questionSpot.className = "correct";
		//add one to correct;
		correct++;
	} else {
		//update class on questionSpot
		questionSpot.className = "incorrect";
		//add one to incorrect
			incorrect++;
		};

	};

		//update correct and incorrect values
		document.getElementById("correct").textContent = correct;
		document.getElementById("incorrect").textContent = incorrect;

}