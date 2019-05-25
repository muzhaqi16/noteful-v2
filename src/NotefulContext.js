import React from 'react'

const NotefulContext = React.createContext({
    data: {
        notes: [],
        folders: [],
    },
    addFolder: () => { },
    addNote: () => { },
    deleteFolder: () => { },
    deleteNote: () => { },
})

export default NotefulContext
