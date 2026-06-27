import { FiPlay } from 'react-icons/fi';
import './TranscriptCard.css';

function TranscriptCard({ items }) {
  return (
    <section className="transcript-list">
      {items.map((item) => (
        <article className="transcript-card glass-card" key={item.time}>
          <div className="timestamp">
            <FiPlay />
            <span>{item.time}</span>
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default TranscriptCard;
