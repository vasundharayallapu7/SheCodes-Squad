import OptionCard from './OptionCard.jsx';
import './QuizCard.css';

function QuizCard({ item, index, selected, onAnswer }) {
  const answered = Boolean(selected);
  return (
    <article className="quiz-card glass-card">
      <span className="quiz-number">Question {index + 1}</span>
      <h3>{item.question}</h3>
      <div className="quiz-options">
        {item.options.map((option) => (
          <OptionCard
            key={option}
            option={option}
            selected={selected === option}
            correct={item.answer === option}
            answered={answered}
            onClick={() => onAnswer(option)}
          />
        ))}
      </div>
    </article>
  );
}

export default QuizCard;
