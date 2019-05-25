import React from 'react';
import NotefulContext from '../NotefulContext';

class NoteDetails extends React.Component {
    static contextType = NotefulContext;

    render() {
        const { noteId } = this.props.match.params;
        let notes = this.context.data.notes;
        if (noteId) {
            notes = notes.filter(
                note => note.id === noteId
            )
        }
        notes = notes.map(note =>
            <div key={note.id}>
                <h2>{note.name}</h2>
                <p>Date Modified : {note.modified}</p>
                <p>{note.content}</p>
                <button>Delete</button>
            </div>
        );
        return (
            <div className="main-list">
                {notes}
            </div>
        );
    }
}

export default NoteDetails;