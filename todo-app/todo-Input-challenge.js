const todos = [
    {text:'eat morning tea', completed:true},
    {text:'Go to Harvest Market', completed:true},
    {text:'Go to Library', completed: true},
    {text:'Make lunch', completed: false},
    {text:'Cook buns for dinner',completed: false}
    ]

const getThingsToDo = todos.filter(function (todo) {
        if (!todo.completed) {
             return todo
            }
    }
)

document.querySelector('#todoleft').innerHTML = 'You have ' +getThingsToDo.length + ' todos left'

getThingsToDo.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('#todos-div').appendChild (p)
})
const filterToDo = function(todos,filterText) {
  let todoCounter = 0
  document.querySelector('#todos-div').innerHTML = ''
  
  todos.forEach(function (todo) {
    if (todo.text.includes(filterText)) {
      if (!todo.completed) todoCounter = todoCounter + 1
      const p = document.createElement('p')
      p.textContent = todo.text
      document.querySelector('#todos-div').appendChild(p)
      
    }
  })
  document.querySelector('#todoleft').innerHTML = 'You have ' + todoCounter + ' todos left'
}
document.querySelector('#search-input').addEventListener('input', function (e) {

    filterToDo(todos,e.target.value)
    }
    )