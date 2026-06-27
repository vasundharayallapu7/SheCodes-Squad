import { FiYoutube } from "react-icons/fi";
import "./VideoDetails.css";

function VideoDetails({ video, sourceUrl }) {
  return (
    <section className="video-details glass-card">
      <div className="video-details-copy">
        <span className="eyebrow">Source Lecture</span>

        <h2>{video.title || "YouTube Lecture"}</h2>

        <p>{video.summary || "No summary available."}</p>

        <div className="video-meta">
          <span>
            <FiYoutube />
            YouTube
          </span>
        </div>

        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {sourceUrl}
        </a>
      </div>
    </section>
  );
}

export default VideoDetails;