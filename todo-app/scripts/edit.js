
let todos = getSavedData()
let todoDesc = document.querySelector('#todo-desc')
let todoTitle = document.querySelector('#todo-title')
let updatedElement = document.querySelector('#lastUpdated')
const todoId = location.hash.substring(1)

let filteredTodo = todos.find(function(todo){
    
    return todo.id===todoId
})

if (filteredTodo===undefined){
    location.href='/index.html'
}
else{

    todoDesc.value = filteredTodo.desc
    todoTitle.value = filteredTodo.title
    updatedElement.textContent = generateLastUpdated(filteredTodo)
}
document.querySelector('#update-todo').addEventListener('click', function () {

    filteredTodo.title = todoTitle.value
    filteredTodo.desc = todoDesc.value
    filteredTodo.modifyAt = moment()
    saveTodos(todos)
    
    updatedElement.textContent = generateLastUpdated(filteredTodo)
    
})
//  todoTitle.addEventListener('input',function(){
//      filteredTodo.title = todoTitle.value
//      filteredTodo.desc = todoDesc.value
//      saveTodos(todos)
//  })
document.querySelector('#remove-todo').addEventListener('click', function () {
    
    deleteTodo(todos,todoId)
    saveTodos(todos)
    location.href='/index.html'
})
window.addEventListener('storage',function(e){
    if (e.key==='todos'){
        todos = JSON.parse(e.newValue)
        filteredTodo = todos.find(function(todo){
            return todo.id=todoId
        })
        if (filteredTodo===undefined){
            location.href('/index.html')
        }
        else{
            todoDesc.value = filteredTodo.desc
            todoTitle.value = filteredTodo.title
            updatedElement.textContent = generateLastUpdated(filteredTodo)
        }
        
    }
})

