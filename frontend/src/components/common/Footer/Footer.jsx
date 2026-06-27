import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner section-shell">
        <div>
          <h3>LectureLens AI</h3>
          <p>Convert long lectures into clear study material with a polished mock AI workflow.</p>
        </div>
        <div className="footer-icons" aria-label="Social links">
          <a href="mailto:team@lecturelens.ai" aria-label="Email">
            <FiMail />
          </a>
          <a href="https://github.com" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
