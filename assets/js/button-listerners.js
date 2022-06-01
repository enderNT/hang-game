
startGameButton.addEventListener('click', () => {
    indexView.classList.toggle('invisible');
    gameView.classList.toggle('invisible');
    startNewGame();
})

addNewWordButton.addEventListener('click', () => {
    indexView.classList.toggle('invisible');
    addWordView.classList.toggle('invisible');
});


saveWordButton.addEventListener('click', (e) => {
    e.preventDefault();
    let word = newWordTextarea.value;
    if(word.match(/^[a-zA-Z]*$/) && word.length <= 8) {
        words.push(word.toUpperCase());
        addWordView.classList.toggle('invisible');
        gameView.classList.toggle('invisible');
        startNewGame();
    } else {
        alert('Palabra errada, intentalo de nuevo. \nRecuerda: Máximo 8 letras y sin acentos.');
    }
});


cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    indexView.classList.toggle('invisible');
    addWordView.classList.toggle('invisible');
});


newGameButton.addEventListener('click', () => startNewGame());


endGameButton.addEventListener('click', () => {
    youLost('Te rendiste');
});