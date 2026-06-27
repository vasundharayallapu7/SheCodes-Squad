import './FlipCard.css';

function FlipCard({ card, flipped, onClick }) {
  return (
    <button className={`flip-card ${flipped ? 'is-flipped' : ''}`} onClick={onClick} type="button">
      <span className="flip-card-inner">
        <span className="flip-face flip-front">
          <small>Term</small>
          <strong>{card.front}</strong>
        </span>
        <span className="flip-face flip-back">
          <small>Definition</small>
          <strong>{card.back}</strong>
        </span>
      </span>
    </button>
  );
}

export default FlipCard;
