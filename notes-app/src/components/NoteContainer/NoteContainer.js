import React from 'react';

import Note from '../Note/Note';

import './NoteContainer.css'; 

export default function NoteContainer() {
  return (
    <div className='note-container'>
        <h2>Notes</h2>
        <div className='note-container_notes custom-scroll'>
        <Note 
          note={{
            text: 'adfsas',
            time: '4:32PM',
            color: 'cyan'
            }}
            />
        <Note 
          note={{
            text: 'adfsas',
            time: '4:32PM',
            color: 'cyan'
            }}
            />
            <Note 
          note={{
            text: 'adfsas',
            time: '4:32PM',
            color: 'cyan'
            }}
            />
            <Note 
          note={{
            text: 'adfsas',
            time: '4:32PM',
            color: 'cyan'
            }}
            />
        <Note 
          note={{
            text: 'adfsas',
            time: '4:32PM',
            color: 'cyan'
            }}
            />
            <Note 
          note={{
            text: 'adfsas',
            time: '4:32PM',
            color: 'cyan'
            }}
            />
        </div>
    </div>
  )
}
