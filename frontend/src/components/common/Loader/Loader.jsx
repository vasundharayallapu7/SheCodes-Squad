import { FiCpu } from 'react-icons/fi';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-card glass-card" role="status" aria-live="polite">
      <div className="loader-orbit">
        <FiCpu />
      </div>
      <div>
        <h3>LectureLens AI is building your study pack</h3>
        <p>Transcribing lecture, extracting concepts, drafting notes, and preparing quiz cards.</p>
      </div>
      <div className="skeleton-stack" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default Loader;
