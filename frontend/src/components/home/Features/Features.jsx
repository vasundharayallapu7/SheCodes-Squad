import { FiCheckSquare, FiClock, FiDownload, FiLayers, FiMessageSquare, FiRepeat } from 'react-icons/fi';
import './Features.css';

const features = [
  { icon: <FiMessageSquare />, title: 'Clean transcript', text: 'Segmented timestamps make lecture review fast and skimmable.' },
  { icon: <FiLayers />, title: 'Structured notes', text: 'Concepts are grouped into digestible study blocks.' },
  { icon: <FiCheckSquare />, title: 'Quiz builder', text: 'Mock multiple-choice questions reinforce recall instantly.' },
  { icon: <FiRepeat />, title: 'Flashcards', text: 'Flip cards help students review definitions and key terms.' },
  { icon: <FiDownload />, title: 'Export ready', text: 'Copy notes and simulate PDF download actions for demos.' },
  { icon: <FiClock />, title: 'History view', text: 'Previously generated study packs are searchable and reusable.' },
];

function Features() {
  return (
    <section className="features section-shell">
      <div className="section-heading">
        <span className="eyebrow">What it creates</span>
        <h2>A complete learning dashboard for every lecture</h2>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card glass-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
