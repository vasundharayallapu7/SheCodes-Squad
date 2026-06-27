import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

import Button from "../../components/common/Button/Button.jsx";
import Input from "../../components/common/Input/Input.jsx";

import "./History.css";

function History() {
  const [history, setHistory] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/history");
      setHistory(res.data.data || []);
    } catch (err) {
      console.error("History Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredHistory = useMemo(() => {
    return history.filter((item) =>
      `${item.title} ${item.summary}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [history, query]);

  const openLecture = (item) => {
    navigate("/dashboard", {
      state: {
        title: item.title,
        summary: item.summary,
        transcript: item.transcript,
        notes: item.notes,
        quiz: item.quiz,
        flashcards: item.flashcards,
        youtubeUrl: item.youtubeUrl,
        videoId: item.videoId,
      },
    });
  };

  return (
    <main className="history-page section-shell fade-in">
      <div className="history-header">
        <div>
          <span className="eyebrow">Recent Activity</span>
          <h1>Generated Lectures</h1>
        </div>

        <Input
          icon={<FiSearch />}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search history..."
        />
      </div>

      {loading ? (
        <div className="glass-card" style={{ padding: "20px", textAlign: "center" }}>
          <h3>Loading history...</h3>
        </div>
      ) : filteredHistory.length === 0 ? (
        <div className="glass-card" style={{ padding: "20px", textAlign: "center" }}>
          <h3>No lectures found</h3>
          <p>Generate your first lecture from the Home page.</p>
        </div>
      ) : (
        <section className="history-grid">
          {filteredHistory.map((item) => (
            <article className="history-card glass-card" key={item._id}>
              <div>
                <span className="eyebrow">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>

                <h3>{item.title || "Untitled Lecture"}</h3>

                <p>
                  {item.summary
                    ? item.summary.substring(0, 150) + "..."
                    : "No summary available."}
                </p>

                <Button
                  variant="secondary"
                  onClick={() => openLecture(item)}
                >
                  Open Previous Result
                </Button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default History;