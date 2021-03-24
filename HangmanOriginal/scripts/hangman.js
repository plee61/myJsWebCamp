const guessLimit = 5
const hangmanWord = 'Love'
const outputElement = document.querySelector('#output')
const attemptLeftElement = document.querySelector('#attempt-left')
const guessWordElement = document.querySelector('#guessWord-input')

const hangman = new Hangman(hangmanWord,guessLimit)

document.querySelector('#status').textContent = hangman.statusMessage

document.querySelector('#guess-btn').addEventListener('click', function () {
    hangman.puzzle = guessWordElement.value.toLowerCase()
    
    outputElement.innerHTML = hangman.puzzle
    attemptLeftElement.textContent = `You have ${hangman.remaining} attempts left`
    guessWordElement.value = ''
    document.querySelector('#status').textContent = hangman.statusMessage
})
document.querySelector('#refresh-btn').addEventListener('click', function () {
    hangman.refresh()
    outputElement.textContent = ''
    attemptLeftElement.textContent = ''
    document.querySelector('#status').textContent = hangman.statusMessage
})
