class Hangman {
    constructor(puzzle){
        
        this.hangmanWord = puzzle.toLowerCase().split('')
        this.guessed = []
        this.noGuessed = '*'
        this.remaining = puzzle.length
        this.status = 'Playing'
    
    }
    set puzzle(guessWord){
        if (this.remaining <= 0) return
        if (!this.guessed.includes(guessWord)){
            this.guessed.push(guessWord)
        }
        this.remaining--
        
    }
    get puzzle(){
        
        if ((this.remaining < 0)) {
            return 'Please refresh to guess again'
        } 
        
        let output = ''
        this.hangmanWord.forEach(word => {
            if ( this.guessed.includes(word)){
                output += '<span>'+ word +'</span>'
            }
            else {
                output += this.noGuessed
            }
        });
        
        return `Your guessed result: ${output}`    
    }
    get statusMessage() {
        if (this.guessed.length === 0) return this.status
        
        if (this.hangmanWord.every((word)=> this.guessed.includes(word) )) 
        {
            this.status = 'Finished'
            this.remaining = 0
        }
        else {
            
            if (this.remaining === 0) {
                this.status = 'Good try! Your puzzle is: ' + this.hangmanWord.join('')
                
            }
        }
        return this.status
    }
   
}
export {Hangman as default}