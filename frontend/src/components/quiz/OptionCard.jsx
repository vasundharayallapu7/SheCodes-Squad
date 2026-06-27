import './OptionCard.css';

function OptionCard({ option, selected, correct, answered, onClick }) {
  const stateClass = answered && selected ? (correct ? 'correct' : 'wrong') : '';
  return (
    <button className={`option-card ${selected ? 'selected' : ''} ${stateClass}`} onClick={onClick} type="button">
      {option}
    </button>
  );
}

export default OptionCard;
