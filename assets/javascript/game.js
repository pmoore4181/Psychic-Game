var words = ["puck", "goalie", "stick", "goal", "mask", "rink", "net", "zambonie"];

var answer = "";
var letters;
var wins = 0
var displayDashes = [];
var wrongGuesses = [];
var rightGuesses = [];
var guesses = 


function start () {



	// picks one of the words out and runs function
	var random = function createAnswer() {
		answer = String(words[Math.floor(Math.random() * words.length)]);
		console.log(answer)

	};

	random();



	//convert answer to "_"s
	function showDashes () {
		for (var i = 0; i < answer.length; i++) {
			var display = displayDashes.push("_");
		}

	}
	showDashes();




	var placeHolder = (String(displayDashes));

	console.log(placeHolder);

	// document.getElementById("correctAnswer").textContent = display;












	// for (var j = 0; j < placeHolder.length; j++) {
	// 	var t = document.createTextNode("_");

	// 	document.getElementById("correctAnswer").innerHTML = newDiv.appendChild(t);
	// }


//============ Console keeps showing "Uncaught TypeError: Cannot set property 'textContent' of null" ====

	// document.getElementById("correctAnswer").textContent = placeHolder;

//=======================================================================================





	


	// record which key was pressed
	function press() {
		// When the user presses a key, it will run the following function...
		document.onkeyup = function (event) {

			// Determine which key was pressed
			var userGuess = event.key;
			console.log(userGuess);

			var test = answer.indexOf(userGuess);
			console.log(test)



			if (test >= 0) {
				console.log("YEAH!");
				rightGuesses.push(userGuess);
				console.log(displayAnswer.indexOf[userGuess]);

				document.getElementById("correctAnswer").innerHTML = rightGuesses.indexOf[answer];
				letters --

				var newDiv = document.createElement("div");

				var t = document.createTextNode("_");

				newDiv.appendChild(t);




					if (letters == 0) {
						wins++
						document.getElementById("Wins").innerHTML = wins;
						start();
						correctAnswer.innerHTML = "";
					}


				for (var i = 0; i < answer.length; i++) {
					rightLetter = answer.charAt[i];
					if (test == rightLetter) {



						console.log(dispayDashes.repace(rightLetter.charAt[i]));


						rightGuesses.push(rightLetter);
						document.getElementById("correctAnswer").innerHTML = rightGuesses;

					}
				}
				
			}

//  ================= Incorrect Guess ======================

			else {
				console.log("Try again");
				wrongGuesses.push(userGuess);
				document.getElementById("yourGuesses").innerHTML = wrongGuesses;
			}





		}

	}

	press();


}



start();

