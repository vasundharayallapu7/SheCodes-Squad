import { FiX } from 'react-icons/fi';
import './Modal.css';

function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="modal-panel glass-card" role="dialog" aria-modal="true" aria-label={title} onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
}

export default Modal;
