import otherSquare, {add, name} from './utilities'
import scream from './scream'
console.log(scream(name))
console.log(add(10,2))
console.log(otherSquare(5))
//"build": "babel src/index.js --out-file public/scripts/bundle.js --presets env --watch"
// const name = 'Alan'
// console.log(name)

// class Hangman{
//     myMethod() {
//         return 'hopes Wei is getting better'
//     }
// }
// const hangman = new Hangman()
// console.log(hangman.myMethod())