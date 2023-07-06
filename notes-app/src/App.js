import React from 'react';

import NoteContainer from './components/NoteContainer/NoteContainer';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <NoteContainer />
    </div>
  );
}

export default App;
