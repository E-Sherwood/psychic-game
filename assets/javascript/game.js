document.ready; {

    var winText = document.getElementById("wins");
    var winCounter = 0
    var loseText = document.getElementById("losses");
    var loseCounter = 0
    var letterArray = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z",
    ];
    var remainingText = document.getElementById("guesses-left");
    var remainingCounter = 8;
    var pastGuesses = [];
    var pastGuessText = document.getElementById("guesses");
    var computerChoice = document.getElementById("compChoice");

    var updateCompChoice = function () {
        this.computerChoice = this.letterArray[Math.floor(Math.random() * this.letterArray.length)];
    };
    var updateGuessed = function () {
        document.getElementById("guesses").innerHTML = "you guessed: " + pastGuesses.join('  ||  ');
    };
    var updateRemaining = function () {
        document.getElementById("guesses-left").innerHTML = "you have " + remainingCounter + " guesses left.";
    };
    var computerChoice = letterArray[Math.floor(Math.random() * letterArray.length - 1)];

    //console.log(computerChoice);
    //testing functionality

    var newGame = function () {
        pastGuesses = [];
        remainingCounter = 8;
        updateCompChoice();
        //console.log(computerChoice);
    }
    document.onkeyup = function (event) {
        var userGuess = event.key;
        document.getElementById("begin").style.display = "none";

        if (remainingCounter > 0) {
            if (userGuess === computerChoice) {
                winCounter++;
                alert("nice, are you psychic or something?");
                newGame();
            }
            else {
                pastGuesses.push(userGuess);
                remainingCounter--;
                updateRemaining();
                updateGuessed();
            };
            if (remainingCounter === 0) {
                loseCounter++;
                alert("maybe next time!");
                newGame();
            };
        };

        winText.textContent = "wins: " + winCounter;
        loseText.textContent = "losses: " + loseCounter;
        pastGuessText.textContent = "you guessed: " + pastGuesses.join('|');
        remainingText.textContent = "you have " + remainingCounter + " guesses left.";
    }
}
document.getElementById("new").addEventListener("click", function(){
    newGame();
});