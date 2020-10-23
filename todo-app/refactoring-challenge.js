if (localStorage.getItem('todos') === null) {
    const p = document.createElement('p')
    p.textContent = 'no local storage'
    document.querySelector('#todos-div').appendChild (p)
} 
else{
    
    displayTodos()
 }

document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    addTodo(e.target.elements.newTodo.value)
    e.target.elements.newTodo.value = ''
})
