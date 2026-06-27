import { FiDownload, FiShare2 } from 'react-icons/fi';
import Button from '../../common/Button/Button.jsx';
import './DashboardHeader.css';

function DashboardHeader({ onCopy, onDownload }) {
  return (
    <section className="dashboard-header">
      <div>
        <span className="eyebrow">Generated study pack</span>
        <h1>AI Lecture Dashboard</h1>
        <p>Review transcript, notes, quiz questions, and flashcards from the generated lecture analysis.</p>
      </div>
      <div className="dashboard-actions">
        <Button variant="ghost" onClick={onCopy}>
          <FiShare2 /> Copy Notes
        </Button>
        <Button onClick={onDownload}>
          <FiDownload /> Download PDF
        </Button>
      </div>
    </section>
  );
}

export default DashboardHeader;
