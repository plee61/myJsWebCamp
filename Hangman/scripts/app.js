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
            console.log('remaining:'+this.remaining)//+'guessed:'+this.guessed+' hangmanword:'+this.hangmanWord)
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

 getCountryInfo('MY').then((data) => {
        console.log(`country code: MY. Country name: ${data}`)
    }).catch( (err) => {
        console.log(`get country info error: ${err}`)
    })
getLocation().then((data)=>{
        console.log(`ip region: ${data.region}, ${data.ip}`)
        return getCountryInfo(data.country)
            
        }).then((data) => {
            console.log(`country name: ${data}`)
        }).catch( (err) => {
        console.log(`get ip info error: ${err}`)
    })
getCurrentCountry().then((data) => {
        console.log(`My current country name: ${data}`)
    }).catch( (err) => {
        console.log(`get current country info error: ${err}`)
    })

    // myPromise.then((data) => {
    //     console.log(data) // Will print "Example data"
    //     }, (err) => {
    //     console.log(`error ${err}`)
    //     })
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