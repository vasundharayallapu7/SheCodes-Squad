import { FiDownload } from 'react-icons/fi';
import Button from '../common/Button/Button.jsx';

function DownloadPDF({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FiDownload /> Download PDF
    </Button>
  );
}

export default DownloadPDF;
