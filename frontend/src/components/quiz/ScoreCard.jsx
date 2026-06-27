import { FiAward } from 'react-icons/fi';
import './ScoreCard.css';

function ScoreCard({ score, total }) {
  return (
    <aside className="score-card glass-card">
      <FiAward />
      <span>Quiz Score</span>
      <strong>{score}/{total}</strong>
    </aside>
  );
}

export default ScoreCard;
