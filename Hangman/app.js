const Hangman = function(hangmanWord, limit){

    this.hangmanWord = hangmanWord.toLowerCase().split('')
    this.guessLimit = limit
    this.guessed = []
    this.noGuessed = '*'
    this.attempted = 0
}
Hangman.prototype.getPuzzle = function (guessWord) {
    
    if ((this.attempted >= this.guessLimit)) {
        return 'Please refresh to guess again'
    } 
    
    
    if (!this.guessed.includes(guessWord)){
        this.guessed.push(guessWord)
    }
    let output = ''
    this.hangmanWord.forEach(word => {
        if ( this.guessed.includes(word)){
            output += word
        }
        else {
            output += this.noGuessed
        }
    });
    
    this.attempted++
    
    return `Your guessed result: ${output}`
}
Hangman.prototype.getAttempted = function(){
    
    let remaining = this.guessLimit - this.attempted
    if (remaining < 0) remaining = 0
    return `You have ${remaining} attempts left`
}
Hangman.prototype.refresh = function(){
    this.guessed = []
    this.attempted = 0
}