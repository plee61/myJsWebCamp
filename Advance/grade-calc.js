const gradeCalc = (score, totalScore) => {
    if ((typeof score !== 'number') || (typeof totalScore !== 'number'))
    {
    
        throw Error('Argument must be a number')   
    }  
    const percent = (score/totalScore) * 100
    let letterGrade = ''

    if (percent >= 90){
        letterGrade = 'A'
    }
    else if(percent >= 80){
        letterGrade = 'B'
    }
    else if (percent >= 70){
        letterGrade = 'C'
    }
    else if (percent >= 60){
        letterGrade = 'D'
    }
    else {
        letterGrade = 'F'
    }
    return (`you got a ${letterGrade} ${percent}%`) 
}
try{
    const grading = gradeCalc(77,100)
    console.log(grading)
}
catch(e){
    console.log('Error:'+e.message)
}
