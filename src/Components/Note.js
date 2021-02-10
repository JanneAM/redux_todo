import React from 'react';
import './Note.css';

const Note = ({ className, note, setDone }) => {


    return (
        <div className="note-container" onClick={setDone}>
            <p className={className}>
                {note.message}
            </p>
        </div>
    );
};

export default Note;