const todos = [
    {text:'eat morning tea', completed:true},
    {text:'Go to Harvest Market', completed:true},
    {text:'Go to Library', completed: true},
    {text:'Make lunch', completed: false},
    {text:'Cook buns for dinner',completed: false}
    ]
const displayTodos = function(todos, hide){
    document.querySelector('#todos-div').innerHTML=''
    todos.forEach(function (todo) {
        if ((!hide) || (hide && !todo.completed)){
            const p = document.createElement('p')
            p.textContent = todo.text
            document.querySelector('#todos-div').appendChild (p)
        }
      })
}    
const addTodo = function (todos, newTodo){
    todos.push({text:newTodo,completed:false})
    const p = document.createElement('p')
    p.textContent = newTodo
    document.querySelector('#todos-div').appendChild (p)
}
displayTodos(todos)
document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    addTodo(todos,e.target.elements.newTodo.value)
    e.target.elements.newTodo.value = ''
})
document.querySelector('#hideCb').addEventListener('change',function(e){
    displayTodos(todos,e.target.checked)
}
)