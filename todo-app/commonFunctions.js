const deleteCallBack(todoId){
   const todoIndex = todos.findIndex(function(todo){
        return todo.id = todoId
    })
   if (todoIndex > -1) {
       todos.splice(todoIndex,1)
       displayTodos()
   }
}
const displayTodos = function(){
    document.querySelector('#todos-div').innerHTML = ''
    
    // todos.forEach(function (todo) { ** chrome does not save multiple data for each key
        
        const d = document.createElement('div')
        const cb = document.createElement('input')
        const sp = document.createElement('span')
        const btn = document.createElement('btn')
        todoStorage = JSON.parse(localStorage.getItem('todos'))
        
        cb.setAttribute('type','checkbox')
        cb.checked = todoStorage.completed 
    
        sp.textContent = todoStorage.title
        btn.text = 'x'
        
        document.querySelector('#todos-div').appendChild (d)
        document.querySelector('#todos-div').appendChild (cb)
        document.querySelector('#todos-div').appendChild (sp)
        document.querySelector('#todos-div').appendChild (btn)
        cb.addEventListner('click', deleteCallBack(todoStorage.id))
        
      //})
}  
const addTodo = function (newTodo){
    const todo = JSON.stringify(
        {id=uuidv4();
         title:newTodo,
         completed:false}
    )
    localStorage.setItem('todos',todo)
    displayTodos()
}
