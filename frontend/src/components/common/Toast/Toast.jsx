import { FiCheckCircle } from 'react-icons/fi';
import './Toast.css';

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="toast" role="status">
      <FiCheckCircle />
      <span>{message}</span>
    </div>
  );
}

export default Toast;
