let todos = getSavedData()

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
          completed:false})
    
    saveTodos(todos)

    displayTodos(todos)
    
    
    e.target.elements.newTodo.value = ''
})

