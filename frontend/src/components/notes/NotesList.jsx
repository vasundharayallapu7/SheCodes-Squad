import NotesCard from './NotesCard.jsx';
import './NotesList.css';

function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NotesCard key={note.heading} note={note} />
      ))}
    </section>
  );
}

export default NotesList;
