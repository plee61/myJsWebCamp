'use strict'
const getSavedData = () => {
    try {
        const Jstorage = localStorage.getItem('notes')
        return Jstorage ? JSON.parse(Jstorage) : []
    }
    catch(e){
        return []    
    }
    
}

const displayNotes = (notes) => {
    
    if (!notes ) {return}
    document.querySelector('#notes-div').innerHTML = ''
    const search = document.querySelector('#search-text').value.toLowerCase()
    notes.forEach((note) => { 
       if (note.title.toLowerCase().includes(search))
       {
        generateNote(note)
       }
    })
}

const generateNote = (note) => { 
    const d = document.createElement('div')
    //const sp = document.createElement('span')
    const anchor = document.createElement('a')
    const removeBtn = document.createElement('button')
    
    removeBtn.textContent = 'X'
    removeBtn.classList.add('button','button--text')
    //sp.textContent =  + todo.title + "</a>"
    anchor.target = "_blank"
    anchor.href = "scripts/edit.html#"+note.id
    anchor.innerText = note.title
    
    //d.appendChild (sp)
    d.appendChild (anchor)
    d.appendChild (removeBtn)
    
    removeBtn.addEventListener('click', function(){
        deleteNote(notes,note.id)
        saveNotes(notes)
        displayNotes(notes)
    })
    document.querySelector('#notes-div').appendChild(d)
}

const deleteNote = (notes,noteId) => {
    const noteIndex = notes.findIndex((note) => note.id === noteId)
    
    if (noteIndex > -1) {
        notes.splice(noteIndex,1)
    }
 }

const saveNotes = (notes) =>{
    
    localStorage.setItem('notes',JSON.stringify(notes))
    
 }
 const generateLastUpdated = (note) => {
     
     if (note.modifyAt){
        return 'last updated:' + moment(note.modifyAt).fromNow()  + ' at:' + moment(note.modifyAt).format('dddd, MMMM Do YYYY, h:mm:ss a')
     }
     else {
        return 'created:' + moment(note.createAt).fromNow() + ' at:' + moment(note.createAt).format('dddd, MMMM Do YYYY, h:mm:ss a')
     }
 }
 
const sortNotes = (sortBy, notes) => {
    
    if (sortBy === 'edited'){
        return notes.sort((a,b)=>{
            
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
        return notes.sort((a,b)=>{
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
        return notes.sort((a,b)=>{
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
        return notes
    }
}

