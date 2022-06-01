// Returns a random word from the WordBank
function choosingWordToPlay() {
    let numberOfWords   = words.length;
    let randomNumber    = Math.ceil( Math.random() * numberOfWords ) - 1;
    return words[randomNumber].split('');
}

// inserts a new DIV tag in the HTML, for each letter of the received word
function showLettersBoard(word) {
    word.forEach( letter => {
        let letterBox = document.createElement('div');
        letterBox.classList.add('game__letter');
        letterBox.id = 'letterBox';
        wordBoard.appendChild(letterBox);
    });
    // Groups as an Array, the DIV's (for each letter) inserted in the HTML. 
    letterBoxes = Array.from(document.querySelectorAll('#letterBox'));
}

// This application has 3 views, all within the index.html file. To show/hide each one, this app will add or remove 
// the "invisible" class in the HTML element. Therefore, in this function, the number of classes of each view is 
// evaluated, if a view has only one class, that is the current view.
function currentView() {
    let view = '';
    if(indexView.classList.length === 1) view   = 'index-view';
    if(addWordView.classList.length === 1) view = 'addWord-view';
    if(gameView.classList.length === 1) view    = 'game-view';
    return view;
}

// This function evaluates if the user still have attempts available to continue playing.
let keepPlaying = () => (attemps >= 0) ? true : false;

// This function evaluates if the user won the game.
let hasWon = () => (wordToPlay.join('') === foundLetters.join('')) ? true : false;

// This function shows a message and the secret word when the user lost the game.
function youLost(message) {
    showMessage(message);
    attemps = -1;
    for(let i = 0; i < wordToPlay.length; i++) {
        showLetterInBoard(i, wordToPlay[i]);
    }
}

// This function prints the right words in to the board
function showLetterInBoard(index, letter) {
    letterBoxes[index].textContent = letter;
}

// This function evaluates if a wrong word was printed before, if not, it prints the wrong word in to the board
function showWrongLetterInBoard(letter) {
    let letterShowed = wrongLettersShowed.includes(letter) ? true : false;
    if(!letterShowed) {
        wrongLettersShowed.push(letter);
        let wrongLetter = document.createElement('span');
        wrongLetter.classList.add('game__wrong-letter');
        wrongLetter.id = 'wrongLetter';
        wrongLetter.textContent = letter;
        wrongLetters.appendChild(wrongLetter); 
    }
}

// This function validates if the letter entered by the user is correct, and relies on other functions 
// to display the result.
function validateTurn(letter) {
    if(wordToPlay.includes(letter)) {
        for(let i = 0; i < wordToPlay.length; i++) {
            if(letter === wordToPlay[i]) {
                showLetterInBoard(i, letter); 
                foundLetters[i] = letter;
            }
        }
        if(hasWon()) showMessage('¡Ganaste!');
    } else {
        drawHangman(300, 400);
        attemps--;
        showWrongLetterInBoard(letter);
    }
}

// This function shows a message when user win or lose
function showMessage(message) {
    gameMessage.textContent = message
    gameMessage.classList.toggle('invisible');
}