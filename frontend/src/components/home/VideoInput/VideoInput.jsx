import { FiYoutube } from 'react-icons/fi';
import Input from '../../common/Input/Input.jsx';
import GenerateButton from '../GenerateButton/GenerateButton.jsx';
import './VideoInput.css';

function VideoInput({ value, onChange, onSubmit, loading }) {
  return (
    <form className="video-input glass-card" onSubmit={onSubmit}>
      <Input
        icon={<FiYoutube />}
        label="YouTube lecture URL"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="https://www.youtube.com/watch?v=..."
        aria-label="YouTube lecture URL"
      />
      <GenerateButton loading={loading} />
    </form>
  );
}

export default VideoInput;
