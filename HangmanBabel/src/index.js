import Hangman from './hangman.js'
import getPuzzle from './request.js'

const outputElement = document.querySelector('#output')
const attemptLeftElement = document.querySelector('#attempt-left')
const guessWordElement = document.querySelector('#guessWord-input')

let hangman

document.querySelector('#guess-btn').addEventListener('click', function () {
    hangman.puzzle = guessWordElement.value.toLowerCase()
    
    outputElement.innerHTML = hangman.puzzle
    attemptLeftElement.textContent = `You have ${hangman.remaining} attempts left`
    guessWordElement.value = ''
    document.querySelector('#status').textContent = hangman.statusMessage
})
document.querySelector('#refresh-btn').addEventListener('click', function () {
    startGame()
    outputElement.textContent = ''
    attemptLeftElement.textContent = ''
})

const startGame = async() => {
    const wordNumber = 1
    const puzzle = await getPuzzle(wordNumber)
    hangman = new Hangman(puzzle)
    
    document.querySelector('#status').textContent = hangman.statusMessage
} 

startGame()
