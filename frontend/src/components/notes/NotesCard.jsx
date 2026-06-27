import './NotesCard.css';

function NotesCard({ note }) {
  return (
    <article className="notes-card glass-card">
      <h3>{note.heading}</h3>
      <p>{note.body}</p>
    </article>
  );
}

export default NotesCard;
