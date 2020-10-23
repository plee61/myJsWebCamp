
const displayTodos = function(){
    document.querySelector('#todos-div').innerHTML = ''
    
    // todos.forEach(function (todo) { ** chrome does not save multiple data for each key
        const p = document.createElement('p')
        p.textContent = JSON.parse(localStorage.getItem('todos')).title
        document.querySelector('#todos-div').appendChild (p)
      //})
}  
const addTodo = function (newTodo){
    const todo = JSON.stringify({title:newTodo,completed:false})
    localStorage.setItem('todos',todo)
    displayTodos()
}
