class Person {
    constructor(firstName, lastName, age, likes=[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} ${this.lastName} is ${this.age} years old. ${this.firstName} likes `
        this.likes.forEach((like)=>{
            bio += `${like} `
        })
        return bio
        
    }
    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}
class Student extends Person {
    constructor(firstName,lastName,age,grade,likes){
        super(firstName,lastName,age,likes)
        this.grade  = grade
    }
    getBio(){
        let bio = `${this.firstName} ${this.lastName} is ${this.age} years old. ${this.firstName} likes `
        this.likes.forEach((like)=>{
            bio += `${like}, `
        })
        let gradeDesc = ''
        this.grade >= 70 ? 'passing' : 'failing'
        
        bio += `${this.firstName} is ${gradeDesc} his/her grade ${this.grade}`
        return bio
    }
    updateGrade(gradeFix){
        this.grade += gradeFix
        this.grade >= 70 ? 'passing' : 'failing'
    } 
}
const s = new Student('Hannah','Lee',45,71,['cooking','piano','reading','garderning'])
console.log(s.getBio())
s.fullName = 'Alan Lorimer'
s.updateGrade(-10)
console.log(s.getBio())