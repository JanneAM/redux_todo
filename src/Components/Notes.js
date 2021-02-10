import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Note from './Note';
import { updateNote } from '../actions/notes';

const Notes = () => {
    const dispatch = useDispatch();

    const notes = useSelector((state) => state.notes)

    return (
        <div>
            {notes.map((note) => (
                <Note   className={note.done ?  'note line-through' : 'note'}
                        key={note.id} 
                        note={note}
                        setDone={() => dispatch(updateNote(note.id, !note.done ? {done:true} : {done:false}))}
                        />
            ))}
        </div>
    );
};

export default Notes;