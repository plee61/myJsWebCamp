
const displayTodos = function(){
    document.querySelector('#todos-div').innerHTML = ''
    
    // todos.forEach(function (todo) { ** chrome does not save multiple data for each key
        
        const d = document.createElement('div')
        const cb = document.createElement('input')
        const sp = document.createElement('span')
        const btn = document.createElement('btn')
        cb.setAttribute('type','checkbox')
        sp.textContent = JSON.parse(localStorage.getItem('todos')).title
        btn.text = 'x'
        document.querySelector('#todos-div').appendChild (d)
        document.querySelector('#todos-div').appendChild (cb)
        document.querySelector('#todos-div').appendChild (sp)
        document.querySelector('#todos-div').appendChild (btn)
      //})
}  
const addTodo = function (newTodo){
    const todo = JSON.stringify({title:newTodo,completed:false})
    localStorage.setItem('todos',todo)
    displayTodos()
}
