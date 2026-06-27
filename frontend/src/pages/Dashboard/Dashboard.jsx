import { useMemo, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import {
  FiBookOpen,
  FiFileText,
  FiHelpCircle,
  FiLayers,
  FiMessageSquare,
} from "react-icons/fi";

import DashboardHeader from "../../components/dashboard/DashboardHeader/DashboardHeader.jsx";
import DashboardStats from "../../components/dashboard/DashboardStats/DashboardStats.jsx";
import ProgressBar from "../../components/dashboard/ProgressBar/ProgressBar.jsx";
import Tabs from "../../components/dashboard/Tabs/Tabs.jsx";
import VideoDetails from "../../components/dashboard/VideoDetails/VideoDetails.jsx";

import Toast from "../../components/common/Toast/Toast.jsx";

import TranscriptCard from "../../components/transcript/TranscriptCard.jsx";
import NotesList from "../../components/notes/NotesList.jsx";
import QuizCard from "../../components/quiz/QuizCard.jsx";
import QuizResult from "../../components/quiz/QuizResult.jsx";
import FlashcardGrid from "../../components/flashcards/FlashcardGrid.jsx";
import FlashcardControls from "../../components/flashcards/FlashcardControls.jsx";

import "./Dashboard.css";

const tabs = [
  { id: "summary", label: "Summary", icon: <FiFileText /> },
  { id: "transcript", label: "Transcript", icon: <FiMessageSquare /> },
  { id: "notes", label: "Notes", icon: <FiBookOpen /> },
  { id: "quiz", label: "Quiz", icon: <FiHelpCircle /> },
  { id: "flashcards", label: "Flashcards", icon: <FiLayers /> },
];

function Dashboard() {
  const location = useLocation();

  if (!location.state) {
    return <Navigate to="/" replace />;
  }

  const {
    title,
    summary,
    transcript,
    notes,
    quiz,
    flashcards,
    youtubeUrl,
  } = location.state;

  const [activeTab, setActiveTab] = useState("summary");
  const [answers, setAnswers] = useState({});
  const [flippedCards, setFlippedCards] = useState([]);
  const [toast, setToast] = useState("");

  const video = {
    title,
    summary,
    url: youtubeUrl,
  };

  const stats = [
    {
      label: "Transcript",
      value: transcript ? "Available" : "None",
    },
    {
      label: "Notes",
      value: `${notes?.length || 0}`,
    },
    {
      label: "Quiz",
      value: `${quiz?.length || 0}`,
    },
    {
      label: "Flashcards",
      value: `${flashcards?.length || 0}`,
    },
  ];

  const transcriptItems = transcript
    ? [
        {
          time: "00:00",
          title: "Lecture Transcript",
          text: transcript,
        },
      ]
    : [];

  const formattedNotes = (notes || []).map((item, index) => ({
    heading: `Point ${index + 1}`,
    body: item,
  }));

  const score = useMemo(() => {
    return (quiz || []).reduce((total, item, index) => {
      return total + (answers[index] === item.answer ? 1 : 0);
    }, 0);
  }, [answers, quiz]);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 1800);
  };

  const copyNotes = async () => {
    const text = formattedNotes
      .map((item) => `${item.heading}: ${item.body}`)
      .join("\n");

    await navigator.clipboard.writeText(text);

    showToast("Notes copied successfully");
  };

  const downloadPdf = () => {
  const doc = new jsPDF();
  let y = 20;

  const addPageIfNeeded = (space = 10) => {
    if (y + space > 270) {
      doc.addPage();
      y = 20;
    }
  };

  // Title
  doc.setFontSize(20);
  doc.text("LectureLens AI - Study Pack", 20, y);
  y += 12;

  // Lecture Title
  doc.setFontSize(14);
  doc.text(`Title: ${title || "Lecture"}`, 20, y);
  y += 10;

  // YouTube URL
  doc.setFontSize(12);
  doc.text("YouTube URL:", 20, y);
  y += 7;

  const urlLines = doc.splitTextToSize(youtubeUrl || "", 170);
  doc.text(urlLines, 20, y);
  y += urlLines.length * 6 + 10;

  // Summary
  doc.setFontSize(14);
  doc.text("Summary", 20, y);
  y += 8;

  const summaryLines = doc.splitTextToSize(summary || "", 170);
  doc.text(summaryLines, 20, y);
  y += summaryLines.length * 6 + 10;

  // Notes
  doc.setFontSize(14);
  doc.text("Notes", 20, y);
  y += 8;

  formattedNotes.forEach((note, index) => {
    addPageIfNeeded();

    const text = `${index + 1}. ${note.body}`;
    const lines = doc.splitTextToSize(text, 170);

    doc.text(lines, 20, y);
    y += lines.length * 6 + 4;
  });

  // Quiz
  y += 10;
  addPageIfNeeded();

  doc.setFontSize(14);
  doc.text("Quiz Questions", 20, y);
  y += 8;

  quiz.forEach((q, index) => {
    addPageIfNeeded();

    const text = `${index + 1}. ${q.question}`;
    const lines = doc.splitTextToSize(text, 170);

    doc.text(lines, 20, y);
    y += lines.length * 6 + 4;
  });

  // Flashcards
  y += 10;
  addPageIfNeeded();

  doc.setFontSize(14);
  doc.text("Flashcards", 20, y);
  y += 8;

  flashcards.forEach((card, index) => {
    addPageIfNeeded();

    const text = `Q: ${card.front} | A: ${card.back}`;
    const lines = doc.splitTextToSize(text, 170);

    doc.text(lines, 20, y);
    y += lines.length * 6 + 4;
  });

  doc.save("LectureLens_AI_Study_Pack.pdf");

  showToast("PDF downloaded successfully!");
};


  const toggleCard = (index) => {
    setFlippedCards((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };
  return (
    <main className="dashboard-page section-shell fade-in">
      <DashboardHeader
        onCopy={copyNotes}
        onDownload={downloadPdf}
      />

      <div className="dashboard-stack">

        <VideoDetails
          video={video}
          sourceUrl={youtubeUrl}
        />

        <ProgressBar value={100} />

        <DashboardStats stats={stats} />

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <section className="tab-panel">

          {activeTab === "summary" && (
            <div className="summary-panel glass-card">
              <h2>Lecture Summary</h2>

              <p>{summary}</p>

              <div className="summary-points">
                {formattedNotes.map((note) => (
                  <span key={note.heading}>
                    {note.heading}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "transcript" && (
            <TranscriptCard
              items={transcriptItems}
            />
          )}

          {activeTab === "notes" && (
            <NotesList
              notes={formattedNotes}
            />
          )}

          {activeTab === "quiz" && (
            <div className="quiz-panel">

              <QuizResult
                score={score}
                total={quiz.length}
              />

              {quiz.map((item, index) => (
                <QuizCard
                  key={index}
                  item={item}
                  index={index}
                  selected={answers[index]}
                  onAnswer={(option) =>
                    setAnswers((current) => ({
                      ...current,
                      [index]: option,
                    }))
                  }
                />
              ))}

            </div>
          )}

          {activeTab === "flashcards" && (
            <>
              <FlashcardControls
                onReset={() => setFlippedCards([])}
              />

              <FlashcardGrid
                cards={flashcards}
                flippedCards={flippedCards}
                onFlip={toggleCard}
              />
            </>
          )}

        </section>

      </div>

      <Toast message={toast} />
    </main>
  );
}

export default Dashboard;