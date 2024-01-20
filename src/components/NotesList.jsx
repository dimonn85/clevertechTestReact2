import React from 'react'

export const NotesList = (props) => {
    const { notes = [], selected, onSelect } = props
    return <div className="list-group">
        {notes.map((note) => (
            <div onClick={() => onSelect(note)} key={note.id} data-testid="note-item" className={`list-group-item ${selected?.id === note.id ? 'active' : ''}`}>{note.title}</div>
        ))}
    </div>
}
