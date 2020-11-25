class Hangman {
    constructor(hangmanWord, limit){
        this.hangmanWord = hangmanWord.toLowerCase().split('')
        this.guessLimit = limit
        this.guessed = []
        this.noGuessed = '*'
        this.remaining = limit
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
        
        if ((this.remaining <= 0)) {
            return 'Please refresh to guess again'
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
        
        
        return `Your guessed result: ${output}`    
    }
    get statusMessage() {
        if (this.guessed.length === 0) return this.status
        if (this.guessed.every((word)=> this.hangmanWord.includes(word) )) 
        {
            
            this.status = 'Finished'
            this.remaining = 0
        }
        else {
            
            if (this.remaining === 0) {
                this.status = 'Failed'
            }
        }
        return this.status
    }
    refresh(){
        this.guessed = []
        this.remaining = this.guessLimit
        this.status = 'Playing'    
    }
}
// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
if ((e.target.readyState === 4) && (e.target.status === 200)) {
    const countries = JSON.parse(e.target.responseText)
    country = countries.find((c)=>{return (c.alpha2Code==='MY')})
    console.log(country.name)
}
else if (e.target.readyState === 4) {
    console.log('An error has taken place')
}
})
request.open('GET', 'https://restcountries.eu/rest/v2/all')
request.send()

// const Hangman = function(hangmanWord, limit){

//     this.hangmanWord = hangmanWord.toLowerCase().split('')
//     this.guessLimit = limit
//     this.guessed = []
//     this.noGuessed = '*'
//     this.remaining = limit
//     this.status = 'Playing'
// }
// Hangman.prototype.getPuzzle = function (guessWord) {
    
//     if ((this.remaining <= 0)) {
//         return 'Please refresh to guess again'
//     } 
    
//     if (this.guessed.includes(guessWord)){
//         return 'You have guessed this before'
//     }

//     if (!this.guessed.includes(guessWord)){
//         this.guessed.push(guessWord)
//     }
//     let output = ''
//     this.hangmanWord.forEach(word => {
//         if ( this.guessed.includes(word)){
//             output += word
//         }
//         else {
//             output += this.noGuessed
//         }
//     });
//     if (!output.includes(this.noGuessed)) {
//         this.status = 'Finished'
//         this.remaining = 0
//     }
//     else {
//         this.remaining--
//         if (this.remaining === 0) {
//             this.status = 'Failed'
//         }
//     }
    
//     return `Your guessed result: ${output}`
// }

// Hangman.prototype.refresh = function(){
//     this.guessed = []
//     this.remaining = this.guessLimit
//     this.status = 'Playing'
// }