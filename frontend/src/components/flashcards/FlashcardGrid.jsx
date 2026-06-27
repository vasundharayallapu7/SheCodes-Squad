import Flashcard from './Flashcard.jsx';
import './FlashcardGrid.css';

function FlashcardGrid({ cards, flippedCards, onFlip }) {
  return (
    <section className="flashcard-grid">
      {cards.map((card, index) => (
        <Flashcard
          key={card.front}
          card={card}
          flipped={flippedCards.includes(index)}
          onClick={() => onFlip(index)}
        />
      ))}
    </section>
  );
}

export default FlashcardGrid;
