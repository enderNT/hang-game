function startNewGame() {
    gameMessage.classList.add('invisible');
    wordBoard.innerHTML = '';
    startHangmanBoard();
    wordToPlay = choosingWordToPlay();
    attemps = 9;
    letterBoxes = [];
    showLettersBoard(wordToPlay);
    foundLetters = [];
    wrongLetters.innerHTML = '';
    wrongLettersShowed = [];
}