const todos = [
{text:'eat morning tea', completed:true},
{text:'Go to Harvest Market', completed:true},
{text:'Go to Library', completed: true},
{text:'Make lunch', completed: false},
{text:'Cook buns for dinner',completed: false}
]

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
})
}

const newParagraph = document.createElement('p')
newParagraph.textContent = 'You have ' + getThingsToDo.length + ' left'
document.querySelector('body').appendChild(newParagraph)
//my answer:
//getThingsToDo.forEach(function (todo) {
//  const newParagraph = document.createElement('p')
//  newParagraph.textContent = getThingsToDo.text
//  document.querySelector('body').appendChild(newParagraph) 
//})
//misunderstood the problem. All content needs to be displayed on the web

todos.forEach(function (todo) {
  const newParagraph = document.createElement('p')
  newParagraph.textContent = todo.text
  document.querySelector('body').appendChild(newParagraph) 
})

