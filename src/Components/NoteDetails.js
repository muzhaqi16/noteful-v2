import React from 'react';
import NotefulContext from '../NotefulContext';

class NoteDetails extends React.Component {
    static contextType = NotefulContext;

    render() {
        console.log(this.context);

        const notes = this.context.data.notes;
        const { noteId } = this.props.match.params;
        const note = notes.find(note => {
            return note.id === noteId
        });
        console.log(note);
        return (
            <div className="main-list">
                <h2>{note.name}</h2>
                <h3>{note.modified}</h3>
                <p>{note.content}</p>
            </div>
        );
    }
}

export default NoteDetails;