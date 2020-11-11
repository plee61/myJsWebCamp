let todos = getSavedData()

sortTodos('edited',todos)
displayTodos(todos)

document.querySelector('#search-text').addEventListener('input', function (e) {
    
    displayTodos(todos)
})

document.querySelector('#hide-completed').addEventListener('change',function(e){
    displayTodos(todos)
})
document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    const uId = uuidv4()
    
    todos.push( {id:uId,
          title: e.target.elements.newTodo.value,
          desc:'',
          createAt: moment(),
          modifyAt: '',
          completed:false})
    
    saveTodos(todos)

    displayTodos(todos)
    
    
    e.target.elements.newTodo.value = ''
})

document.querySelector('#create').addEventListener('click',function(){
    const uId = uuidv4()
 
    todos.push( {id:uId,
        title: '',
        desc:'',
        createAt:moment(),
        modifyAt:'',
        completed:false})
  
    saveTodos(todos)
    location.href='/edit.html#'+uId
})
window.addEventListener('storage',function(e){
    if (e.key==='todos'){
        todos = JSON.parse(e.newValue)
        displayTodos(todos)
        
    }
})
document.querySelector('#sort-by').addEventListener('change',function(e){
    sortTodos(e.target.value, todos)
    displayTodos(todos)

})
// const date1 = moment()
// date1.date(15)
// date1.month('January')
// date1.year(1975)
// console.log(date1.format('MMM D YYYY'))
// const date1 = new Date('15 Jan 2020 5:00:01')
// const date2 = new Date('15 Jan 2019 5:00:01')

// const timestamp1 = date1.getTime()
// const timestamp2 = date2.getTime()
// if (timestamp2 > timestamp1){
//     console.log(`date ${date2.toString()} is later than ${date1.toString()}`)
// }
// else {
//     console.log(`date ${date1.toString()} is later than ${date2.toString()}`)
// }