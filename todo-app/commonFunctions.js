const getSavedData = function () {
    
    const Jstorage = localStorage.getItem('todos')
    if (Jstorage !== null){
        return JSON.parse(Jstorage)
    } else {
       return []
    }

}
const displayTodos = function(todos){
    
    if (todos === null) {return}
    document.querySelector('#todos-div').innerHTML = ''
    const hide = document.querySelector('#hide-completed').checked
    const search = document.querySelector('#search-text').value.toLowerCase()
    
    todos.forEach(function (todo) { 
       if (!hide || (hide && todo.completed)) {
    
       if (todo.title.toLowerCase().includes(search))
       
        generateTodo(todo)
       }
        
    })
}
const generateTodo = function(todo){ 
    const d = document.createElement('div')
    const cb = document.createElement('input')
    //const sp = document.createElement('span')
    const anchor = document.createElement('a')
    const removeBtn = document.createElement('button')

    cb.setAttribute('type','checkbox')
    cb.checked = todo.completed 
    removeBtn.textContent = 'x'

    //sp.textContent =  + todo.title + "</a>"
    anchor.target = "_blank"
    anchor.href = "/edit.html#"+todo.id
    anchor.innerText = todo.title
    
    document.querySelector('#todos-div').appendChild (d)
    d.appendChild (cb) 

    cb.addEventListener('change',function(){

        modifyCompleted(cb.checked,todo.id)
        saveTodos(todos)
        displayTodos(todos)
    })
    //d.appendChild (sp)
    d.appendChild (anchor)
    d.appendChild (removeBtn)

    removeBtn.addEventListener('click', function(){
        deleteTodo(todos,todo.id)
        saveTodos(todos)
        displayTodos(todos)})
    }

const modifyCompleted = function(completeStatus, id){
    
    const todoIndex = todos.findIndex(function(todo){
        return  todo.id === id
    })
    
    if (todoIndex > -1) {
        todos[todoIndex].completed = completeStatus    
        todos[todoIndex].modifyAt = moment()
    }
}
const deleteTodo = function (todos,todoId){
    const todoIndex = todos.findIndex(function(todo){
         return todo.id === todoId
     })
    
    if (todoIndex > -1) {
        todos.splice(todoIndex,1)
    }
 }
 const saveTodos = function (todos){
    
    localStorage.setItem('todos',JSON.stringify(todos))
    
 }
 const generateLastUpdated = function(todo){
     
     if (todo.modifyAt === undefined){
        return 'created:' + moment(todo.createAt).fromNow() 
     }
     else {
        return 'last updated:' + moment(todo.modifyAt).fromNow()
     }
 }
 


