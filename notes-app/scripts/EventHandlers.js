'use strict'
let notes = getSavedData()

sortNotes('edited', notes)
displayNotes(notes)

document.querySelector('#search-text').addEventListener('input', function (e) {
    displayNotes(notes)
})

document.querySelector('#notes-form').addEventListener('submit',function(e){
    e.preventDefault()
    const textInput = e.target.elements.newNote.value.trim()
    
    if (textInput.length === 0) {return}
    const uId = uuidv4()
    
    notes.push( {id:uId,
          title: textInput,
          desc:'',
          createAt: moment(),
          modifyAt: '',
          completed:false})
    
    saveNotes(notes)

    displayNotes(notes)
    
    
    e.target.elements.newNote.value = ''
})
// commented create button on index.html
// document.querySelector('#create').addEventListener('click',function(){
//     const uId = uuidv4()
 
//     todos.push( {id:uId,
//         title: '',
//         desc:'',
//         createAt:moment(),
//         modifyAt:'',
//         completed:false})
  
//     saveTodos(todos)
//     location.href='scripts/edit.html#'+uId
// })
window.addEventListener('storage',function(e){
    if (e.key==='notes'){
        notes = JSON.parse(e.newValue)
        displayNotes(notes)
        
    }
})

document.querySelector('#sort-by').addEventListener('change',function(e){
    sortNotes(e.target.value, notes)
    displayNotes(notes)

})

