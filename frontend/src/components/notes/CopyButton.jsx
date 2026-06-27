import { FiCopy } from 'react-icons/fi';
import Button from '../common/Button/Button.jsx';

function CopyButton({ onClick }) {
  return (
    <Button variant="secondary" onClick={onClick}>
      <FiCopy /> Copy Notes
    </Button>
  );
}

export default CopyButton;
