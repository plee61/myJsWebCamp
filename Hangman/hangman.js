const guessLimit = 2
const hangmanWord = 'Love'
const outputElement = document.querySelector('#output')
const attemptLeftElement = document.querySelector('#attempt-left')
const guessWordElement = document.querySelector('#guessWord-input')
document.querySelector('#guess-btn').addEventListener('click', function () {
    const guessWord = guessWordElement.value.toLowerCase()
    outputElement.textContent = hangman.getPuzzle(guessWord)
    attemptLeftElement.textContent = hangman.getAttempted()
    guessWordElement.value = ''

})
document.querySelector('#refresh-btn').addEventListener('click', function () {
    hangman.refresh()
    outputElement.textContent = ''
    attemptLeftElement.textContent = ''
})
const hangman = new Hangman(hangmanWord,guessLimit)
