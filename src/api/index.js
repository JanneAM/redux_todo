import axios from 'axios';

const url = 'http://localhost:3001/notes';

export const fetchNotes = () => axios.get(url);
export const createNote = (newItem) => axios.post(url, newItem);
export const deleteNote = (id) => axios.delete(`${url}/${id}`);
export const updateNote = (id, updatedItem) => axios.patch(`${url}/${id}`, updatedItem);