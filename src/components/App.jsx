import React, {useEffect, useState} from 'react'

import { NotesList } from './NotesList'
import { NoteForm } from './NoteForm'

export const App = (props) => {
    const { service } = props

    const [notes, setNotes] = useState([])
    const [selected, setSelected] = useState(null)
    const [formState, setFormState] = useState(undefined);

    useEffect(() => {
        setFormState(selected ? {...selected} : undefined);
    }, [selected]);

    const handleChange = (note) => {
        setFormState({...note});
    }

    const updateNotes = () => {
        service.getNotes().then((notes) => setNotes(notes))
    }

    // (!) Get notes from service

    useEffect(() => {
        updateNotes();
    }, []);

    // Select new empty note
    function newNote(){
        setSelected({title: '', text: ''})
    }

    // Set note as selected
    function onSelect(note){
        setSelected(note);
    }

    // Save note to service
    function onSubmit(note){
        service.saveNote(note).then((newNote)=> {
            updateNotes();
            setSelected(newNote);
        });
    }

    // Unselect note
    function onCancel(){
        setFormState(selected ? {...selected} : undefined);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React notes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <NotesList onSelect={onSelect} notes={notes} selected={selected} />
                </div>
                <div className="col-md-8">
                    {selected && <NoteForm onChange={handleChange} onSubmit={onSubmit} onCancel={onCancel} note={formState} />}
                    <div><button onClick={newNote} data-testid="new-note">New Note</button></div>
                </div>
            </div>
        </div>
    )
}
