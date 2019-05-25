import React from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './MainSidebar.css';

class Sidebar extends React.Component {
    static contextType = NotefulContext;

    render() {
        const folderList = this.context.data.folders.map(folder => {
            return <li key={folder.id}><NavLink className="folder-link" to={`/folder/${folder.id}`}>{folder.name}</NavLink></li >
        });
        return (
            <div className="sidebar">
                <ul>
                    {folderList}
                    <li>Add Folder</li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
