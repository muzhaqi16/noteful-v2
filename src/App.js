import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'
import Header from './Components/Header'
import MainSidebar from './Components/MainSidebar'
import MainList from './Components/MainList'
import NoteDetails from './Components/NoteDetails';
import NavSidebar from './Components/NavSidebar';
import NotefulContext from './NotefulContext';


class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  };
  componentDidMount() {
    const url = "http://localhost:9090/db";
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    }).then(response => response.json())
      .then(data => this.setState(data));
  }
  deleteNote(noteId) {
    const url = "http://localhost:9090/notes/" + noteId;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    }).then(response => console.log(response));
  }
  render() {
    const contextValue = {
      data: this.state,
      deleteNote: this.deleteNote
    }
    return (
      <div className="App">
        <Header />
        <div className="content">
          <NotefulContext.Provider value={contextValue}>
            <nav className='nav'>
              <Route exact path='/' component={MainSidebar} />
              <Route exact path='/folder/:folderId' component={MainSidebar} />
              <Route path='/notes/' component={NavSidebar} />

              <Route
                path='/add-folder'
                component={NavSidebar}
              />
              <Route
                path='/add-note'
                component={NavSidebar}
              />
            </nav>
            <main className="main">
              <Route exact path='/' component={MainList} />
              <Route exact path='/folder/:folderId' component={MainList} />
              <Route path='/notes/:noteId'
                //const {noteId} = routerProps.match.params;
                //const note = findNote(notes, noteId) || {}
                //const folder = findFolder(folders, note.folderId)/
                component={NoteDetails} />
            </main>
          </NotefulContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
