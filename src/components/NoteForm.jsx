import React from 'react'

export const NoteForm = (props) => {
    const { note = { title: '', text: '' }, onSubmit, onCancel, onChange } = props;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(note);
    }

    const handleChange = (event) => {
        event.preventDefault();
        onChange({
            ...note,
            [event.target.name]: event.target.value,
        })
    }


    return <form onSubmit={handleFormSubmit}>
        <div className="form-group">
            <label>Title:</label>
            <input
                className="form-control"
                data-testid="input-title"
                name="title"
                value={note.title}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Note:</label>
            <textarea
                className="form-control"
                data-testid="input-text"
                name="text"
                value={note.text}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <input
                type="button"
                data-testid="cancel-note"
                className="btn btn-default pull-right"
                value="Cancel"
                onClick={onCancel}
            />
            <input
                type="submit"
                data-testid="save-note"
                className="btn btn-default pull-right"
                value="Save"
            />
        </div>
    </form>
}
