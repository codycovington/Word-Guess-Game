


//Star Wars Word Array
var starWars = ["droid", "chewbacca", "tatooine", "skywalker", "yoda", "leia", "han", "alderon", "force"];

//Set up game counters
var numWins = 0;
var numLosses = 0;

//Function to initialize the game
function startGame() {
    
   
    //Computer picks a random word in Star Wars Array
    var chosenWord = starWars[Math.floor(Math.random()*starWars.length)];
    console.log(chosenWord);
    var lettersLeft = chosenWord.length;

    var chosenWordArr = [];
    var guessedLettersArr = [];
    var remainingGuesses = 5;

    //Setup the HTML divs
    var numWinsDiv = document.getElementById("numWinsDiv");
    var chosenWordDiv = document.getElementById("chosenWordDiv");
    var lettersGuessedDiv = document.getElementById("lettersGuessedDiv");
    var remainingLettersDiv = document.getElementById("remainingLettersDiv");

    //Initiate a for loop for pushing blanks to the array
    for (var i = 0; i < chosenWord.length; i++) {
		chosenWordArr.push("_");
	}
    console.log(chosenWordArr);

   // Join anwser
   var displayString = chosenWordArr.join(" ");

   //Display Game information in HTML DIVS
    numWinsDiv.innerHTML = "<h3>Wins: " + numWins + "</h3>";
	chosenWordDiv.innerHTML = "<h3>Word: " + displayString + "</h3>";
	lettersGuessedDiv.innerHTML = "<h3>Letters Already Guessed: " + (guessedLettersArr.join(" ")) + "</h3>";
	remainingLettersDiv.innerHTML = "<h3>Number of Chances Remaining: " + remainingGuesses + "</h3>";




    //USER INPUT function and letter restriction
    document.onkeyup = function(event) {
		isCorrectOrRepeated = false;
		var userInput = event.key;
        userInput = userInput.toLowerCase();
        
        //this statement only accepts letters, no special chars
		if (userInput === 'a' || userInput === 'b' || userInput === 'c' || userInput === 'd' || userInput === 'e' || userInput === 'f' || userInput === 'g' || userInput === 'h' || userInput === 'i' || userInput === 'j' || userInput === 'k' || userInput === 'l' || userInput === 'm' || userInput === 'n' || userInput === 'o' || userInput === 'p' || userInput === 'q' || userInput === 'r' || userInput === 's' || userInput === 't' || userInput === 'u' || userInput === 'v' || userInput === 'w' || userInput === 'x' || userInput === 'y' || userInput === 'z') {
			if (guessedLettersArr.toString().includes((userInput.toLowerCase()))) {
				isCorrectOrRepeated = true;
			} else {
				guessedLettersArr.push(" " + userInput.toLowerCase());
				lettersGuessedDiv.innerHTML = "<h3>Letters Already Guessed: " + (guessedLettersArr.join(" ")) + "</h3>";
			}
			for (var i = 0; i < chosenWord.length; i++) {
				if (chosenWord[i] === userInput) {
					chosenWordArr[i] = userInput;
					displayString = chosenWordArr.join(" ");
					chosenWordDiv.innerHTML = "<h3>Word: " + displayString + "</h3>";
					lettersLeft--;
					isCorrectOrRepeated = true;
				}
            }
            
            if (chosenWord === chosenWordArr.join("")) {
				numWins++;
				numWinsDiv.innerHTML = "<h3>Wins: " + numWins + "</h3>";
                remainingGuesses = 5;
                //Reset statistics and renew game
				startGame();
			}
			if (isCorrectOrRepeated) {
                remainingLettersDiv.innerHTML = "<h3>Number of Chances Remaining: " + remainingGuesses + "</h3>";
                
			} else {
				remainingGuesses--;
				remainingLettersDiv.innerHTML = "<h3>Number of Chances Remaining: " + remainingGuesses + "</h3>";
            }
            
			if (remainingGuesses <= 0) {
				//Reset statistics and renew game
				startGame();
			}
            
        
    };

};

};

startGame();



    
