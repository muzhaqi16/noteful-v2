import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './MainList.css'

class MainList extends React.Component {

    static contextType = NotefulContext;

    render() {
        const { folderId } = this.props.match.params;
        let notes = this.context.data.notes;
        if (folderId) {
            notes = notes.filter(
                note => note.folderId === folderId
            )
        }
        notes = notes.map(note =>
            <li key={note.id}><Link to={`/notes/${note.id}`}>{note.name}</Link><p>Date Modified : {note.modified}</p></li>
        );
        return (
            <div className="main-list">
                <ul>
                    {notes}
                    <li><Link to="">Add Note</Link></li>
                </ul>
            </div>
        );
    }
}

export default MainList;
