function startGame() {
    const userInputField = document.getElementById("userInput");
    const wrongLetters = document.getElementById("wrongLetters");
    const remainingGuessesElement = document.getElementById("remainingGuesses");
    let remainingGuesses;
    let correctWords;
    let incorrectWords;
    let word;
    function resetGame() {
        correctWords = [];
        incorrectWords = [];
        remainingGuesses = 5;
        //get random word
        let randomWord = wordListWithHints[Math.floor(Math.random() * wordListWithHints.length)];
        word = randomWord.word;
        document.getElementById("hintText").textContent = randomWord.hint;
        // reset other elements
        wrongLetters.innerText = "";
        remainingGuessesElement.textContent = remainingGuesses;
    }
    function handleUserInput(event) {
        if (event.key === "Enter") {
            const userInput = userInputField.value.toLowerCase().trim(); //get user input
            userInputField.value = ""; //clear input
            if (userInput.match(/^[A-Za-z]+$/)) {
                if (word === userInput) {
                    alert(`Congrats! You found the word ${word.toUpperCase()}`);
                    correctWords.push(userInput);
                    resetGame(); //reset game after success
                } else {
                    incorrectWords.push(userInput);
                    wrongLetters.innerText = incorrectWords.join(", ");
                    remainingGuesses--;
                    remainingGuessesElement.textContent = remainingGuesses;

                    if (remainingGuesses === 0) {
                        alert("Sorry, you are out of guesses! Let's start over.");
                        resetGame(); //reset after user out of guesses
                    }
                }
            }
        }
    }
    resetGame();
    //event listener
    userInputField.addEventListener("keyup", handleUserInput);
}
startGame();
