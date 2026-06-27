import { FiRotateCcw } from 'react-icons/fi';
import Button from '../common/Button/Button.jsx';
import './FlashcardControls.css';

function FlashcardControls({ onReset }) {
  return (
    <div className="flashcard-controls">
      <p>Tap any flashcard to reveal the definition.</p>
      <Button variant="secondary" onClick={onReset}>
        <FiRotateCcw /> Reset Cards
      </Button>
    </div>
  );
}

export default FlashcardControls;
