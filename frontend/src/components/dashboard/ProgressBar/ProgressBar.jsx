import './ProgressBar.css';

function ProgressBar({ value = 100 }) {
  return (
    <section className="progress-card glass-card">
      <div className="progress-label">
        <span>AI processing complete</span>
        <strong>{value}%</strong>
      </div>
      <div className="progress-track" aria-label="AI processing progress">
        <span style={{ width: `${value}%` }} />
      </div>
    </section>
  );
}

export default ProgressBar;
