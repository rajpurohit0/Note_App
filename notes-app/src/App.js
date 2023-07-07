import React, { useEffect, useState } from 'react';

import NoteContainer from './components/NoteContainer/NoteContainer';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [notes,setNotes]=useState(
    JSON.parse(localStorage.getItem('notes-pp')) ||[]
    );

  const addNote=(color)=>{
    const tempNote=[...notes]

    tempNote.push({
      id: Date.now() +""+Math.floor(Math.random()*78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNote);
  };

  const deleteNote=(id)=>{
    const tempNotes=[...notes];

    const index=tempNotes.findIndex(item=>item.id===id);
    if(index<0)return

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText=(text,id)=>{
    const tempNotes=[...notes];

    const index=tempNotes.findIndex((item)=>item.id==id);
    if(index<0) return;
    tempNotes[index].text=text;
    setNotes(tempNotes);
  };

  useEffect(()=>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
  },[notes])

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes}
      deleteNote={deleteNote}
      updateText={updateText}
      />
    </div>
  );
}

export default App;
