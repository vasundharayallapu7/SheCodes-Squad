import { FiBookOpen, FiCpu, FiFileText, FiPlayCircle } from 'react-icons/fi';
import VideoInput from '../VideoInput/VideoInput.jsx';
import Loader from '../../common/Loader/Loader.jsx';
import './Hero.css';

function Hero({ url, setUrl, onGenerate, loading }) {
  return (
    <section className="hero section-shell fade-in">
      <div className="hero-copy">
        <span className="eyebrow">AI study workflow</span>
        <h1>
          LectureLens AI turns YouTube lectures into <span className="gradient-text">study-ready material</span>
        </h1>
        <p>
          Paste a lecture link and watch a simulated AI pipeline create transcripts, structured notes,
          quiz questions, and flashcards from realistic mock data.
        </p>
        <VideoInput value={url} onChange={setUrl} onSubmit={onGenerate} loading={loading} />
      </div>

      <div className="hero-visual" aria-label="AI lecture analysis preview">
        <div className="video-preview glass-card">
          <div className="video-topline">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-screen">
            <FiPlayCircle />
          </div>
          <div className="analysis-grid">
            <span><FiFileText /> Notes</span>
            <span><FiBookOpen /> Quiz</span>
            <span><FiCpu /> Summary</span>
          </div>
        </div>
      </div>

      {loading && <Loader />}
    </section>
  );
}

export default Hero;
