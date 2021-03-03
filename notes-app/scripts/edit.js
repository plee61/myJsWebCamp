
let notes = getSavedData()
let noteDesc = document.querySelector('#note-desc')
let noteTitle = document.querySelector('#note-title')
let updatedElement = document.querySelector('#lastUpdated')
const noteId = location.hash.substring(1)

let filteredNote = notes.find(function(note){
    
    return note.id===noteId
})

if (filteredNote===undefined){
    location.href='/index.html'
}
else{

    noteDesc.value = filteredNote.desc
    noteTitle.value = filteredNote.title
    updatedElement.textContent = generateLastUpdated(filteredNote)
}
document.querySelector('#edit-form').addEventListener('submit',function(e){
    e.preventDefault()
//document.querySelector('#update-todo').addEventListener('click', function () {

    filteredNote.title = noteTitle.value
    filteredNote.desc = noteDesc.value
    filteredNote.modifyAt = moment()
    saveNotes(notes)
    
    updatedElement.textContent = generateLastUpdated(filteredNote)
    
})
//  todoTitle.addEventListener('input',function(){
//      filteredTodo.title = todoTitle.value
//      filteredTodo.desc = todoDesc.value
//      saveTodos(todos)
//  })
document.querySelector('#remove-note').addEventListener('click', function () {
    
    deleteNote(notes,noteId)
    saveNotes(notes)
    location.href='/index.html'
})
document.querySelector('#close-note').addEventListener('click', function () {
    
    window.close()
})
window.addEventListener('storage',function(e){
    if (e.key==='notes'){
        notes = JSON.parse(e.newValue)
        filteredNotes = notes.find(function(note){
            return notes.id=noteId
        })
        if (filteredNote===undefined){
            location.href('/index.html')
        }
        else{
            noteDesc.value = filteredNote.desc
            noteTitle.value = filteredNote.title
            updatedElement.textContent = generateLastUpdated(filteredNote)
        }
        
    }
})

