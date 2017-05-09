alert("Try to guess what letter I'm thinking of.\n\nPress any key to start guessing!");

// create array with all letters
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 10;
var guess = [];


// generate answer
function pick () {
	var letter = choices[Math.floor(Math.random() * choices.length)];
	var answer = letter;
	return answer
}

var answer = pick();


// runs everytime a key is pressed
document.onkeyup = function (event) {

	// record buttons pressed
	var userGuess = event.key;
	console.log(userGuess);

	// record key press in HTML
	guess.push(userGuess);
	document.getElementById("yourGuesses").innerHTML = guess;


		// if guess is correct
		if (userGuess == answer) {

				alert("Corectamundo!");
				wins++;
				document.getElementById("Wins").innerHTML = wins;
				guess.length = 0;
				document.getElementById("yourGuesses").innerHTML = guess;
				losses = 10;
				document.getElementById("guessesLeft").innerHTML = losses;
				answer = pick();
				return answer;

		}



		// if guess not correct
		else {

			losses--;
			document.getElementById("guessesLeft").innerHTML = losses;

			if (losses == 0) {
				alert("Oh no! You ran out of guesses.\n\nTry again");
				losses = 10;
				document.getElementById("guessesLeft").innerHTML = losses;
				guess.length = 0;
				document.getElementById("yourGuesses").innerHTML = guess;
				answer = pick();
				return answer;

			}

		}


} // closing document.onkeyup






