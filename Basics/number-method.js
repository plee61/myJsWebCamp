let min = 1
let max = 5
function guessNumber(num){
    let randomNum = Math.floor (Math.random() * (max - min) + 1) + min
    return randomNum 
    
}
let myGuess = 3
let randomReturn = guessNumber(myGuess) 
let match = myGuess === randomReturn
console.log(`My guess ${myGuess} matches Random number ${randomReturn} is ${match}`)