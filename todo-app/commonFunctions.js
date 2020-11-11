const getSavedData = () => {
    
    const Jstorage = localStorage.getItem('todos')
    return Jstorage ? JSON.parse(Jstorage) : []
    // if (Jstorage !== null){
    //     return JSON.parse(Jstorage)
    // } else {
    //    return []
    // }

}
const displayTodos = (todos) => {
    
    if (!todos ) {return}
    document.querySelector('#todos-div').innerHTML = ''
    const hide = document.querySelector('#hide-completed').checked
    const search = document.querySelector('#search-text').value.toLowerCase()
    
    todos.forEach((todo) => { 
       if (!hide || (hide && todo.completed)) {
    
       if (todo.title.toLowerCase().includes(search))
       
        generateTodo(todo)
       }
        
    })
}
const generateTodo = (todo) => { 
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

const modifyCompleted = (completeStatus, id) => {
    
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    
    if (todoIndex > -1) {
        todos[todoIndex].completed = completeStatus    
        todos[todoIndex].modifyAt = moment()
    }
}
const deleteTodo = (todos,todoId) => {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId)
    
    if (todoIndex > -1) {
        todos.splice(todoIndex,1)
    }
 }
 const saveTodos = (todos) =>{
    
    localStorage.setItem('todos',JSON.stringify(todos))
    
 }
 const generateLastUpdated = (todo) => {
     
     if (todo.modifyAt){
        return 'last updated:' + moment(todo.modifyAt).fromNow()  + ' at:' + moment(todo.modifyAt).format('dddd, MMMM Do YYYY, h:mm:ss a')
     }
     else {
        return 'created:' + moment(todo.createAt).fromNow() + ' at:' + moment(todo.createAt).format('dddd, MMMM Do YYYY, h:mm:ss a')
     }
 }
 
const sortTodos = (sortBy, todos) => {
    
    if (sortBy === 'edited'){
        return todos.sort((a,b)=>{
            
            if (a.modifyAt > b.modifyAt) { 
                return 1
            }
            else if (a.modifyAt < b.modifyAt){
                return -1
            } else {
                return 0
            }
        })
    }
    else if (sortBy === 'created'){
        return todos.sort((a,b)=>{
            if (a.createAt > b.createAt) { 
                return 1
            }
            else if (a.createAt < b.createAt){
                return -1
            } else {
                return 0
            }
        })
    }
    else if (sortBy === 'alphabet'){
        return todos.sort((a,b)=>{
            if (a.title > b.title) { 
                return 1
            }
            else if (b.title > a.title){
                return -1
            } else {
                return 0
            }
        })
    }
    else {
        return todos
    }
}

