const people = [
    {name: 'Hannah',
     age: 45},
    {name: 'Alan',
    age: 57},
    {name: 'Joseph',
    age: 5},
    {name: 'May',
    age: 3}
]
// const findAdult = function (adultAge){
//     return people.filter(function(person){
//         return person.age > adultAge
//     })
// }
const findAdult = (adultAge) => people.filter( (person) => person.age > adultAge)

const adults = findAdult(21)

// adults.forEach(function(adult){
//     console.log(`${adult.name} is ${adult.age} years old`)
// })

adults.forEach((adult) => console.log(`${adult.name} is ${adult.age} years old`)
)


