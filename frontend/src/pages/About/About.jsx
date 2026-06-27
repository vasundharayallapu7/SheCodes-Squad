import { FiCode, FiCpu, FiUsers } from 'react-icons/fi';
import { teamMembers, technologies } from '../../data/dummyData.js';
import './About.css';

function About() {
  return (
    <main className="about-page section-shell fade-in">
      <section className="about-hero glass-card">
        <span className="eyebrow">Hackathon project</span>
        <h1>LectureLens AI</h1>
        <p>
          A frontend prototype for an AI-powered educational platform that converts YouTube lectures
          into focused transcripts, notes, quizzes, and flashcards using mock data.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-card glass-card">
          <FiCpu />
          <h3>Project Overview</h3>
          <p>Designed as a complete demo workflow, from URL submission to generated learning dashboard.</p>
        </article>
        <article className="about-card glass-card">
          <FiUsers />
          <h3>Team Members</h3>
          <ul>
            {teamMembers.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </article>
        <article className="about-card glass-card">
          <FiCode />
          <h3>Technologies Used</h3>
          <ul>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default About;
