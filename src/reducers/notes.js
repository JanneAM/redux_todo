import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (notes = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [ ...notes, action.payload];  
        case DELETE:
            return notes.filter((note) => note.id !== action.payload.id ? action.payload : note);  
        case UPDATE:
            return notes.map((note) => note.id === action.payload.id ? action.payload : note);
        default:
            return notes;
    }
};