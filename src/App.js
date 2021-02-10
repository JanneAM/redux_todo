import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchNotes, createNote } from './actions/notes';

import './App.css';

import Notes from './Components/Notes';

const App = () => {

    const [noteData, setNoteData] = useState({ message: '', done: false })

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchNotes());
    },[dispatch])


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createNote(noteData));
        clear();
    }

    const clear = () => {
        setNoteData({ message: ''});
    }

    return(
        <div>
            <h1>Notes list</h1>
            <Notes/>
            <form onSubmit={handleSubmit}>
                <input name="message" value={noteData.message} onChange={(e) => setNoteData({ ...noteData, message: e.target.value })} />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
};

export default App;