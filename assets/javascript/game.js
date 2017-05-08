alert("Try to guess what letter I'm thinking of.\n\nPress any key to start guessing!");

var yourChoice = document.getElementById("yourGuesses");

var correctAnswer = document.getElementById("correctAnswer");

// create array with all letters
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// generate answer
var answer = choices[Math.floor(Math.random() * choices.length)];

console.log(answer)



// record which guesses have been made
document.onkeyup = function(event) {

	var userGuess = event.key;
	console.log(userGuess);



	if (userGuess === answer) {
		console.log("Corectamundo!");
	}


	// yourChoice.textContent = event.key;

}





