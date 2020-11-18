const Hangman = function(guessWord, guessLimit){

    this.guessWord = guessWord
    this.guessLimit = guessLimit
    this.guessed = ['e','a']
    this.noGuessed = '*'
}
Hangman.prototype.getPuzzle = function () {
    const puzzle = this.guessWord.toLowerCase().split('')
    let output = ''
    let i=0 
    
    puzzle.forEach(p => {
        if ( this.guessed.includes(p)){
            output += p
        }
        else {
            output += this.noGuessed
            this.guessed.push(p)
        }
    });
    return output
}
const hangman1 = new Hangman('Love',2)
const hangman2 = new Hangman('Anger',3)
console.log(hangman1.getPuzzle())
console.log(hangman2.getPuzzle())