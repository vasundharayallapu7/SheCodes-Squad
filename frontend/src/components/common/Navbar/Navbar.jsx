import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiZap } from 'react-icons/fi';
import './Navbar.css';

function Navbar({ compact = false }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`navbar ${compact ? 'navbar-compact' : ''}`}>
      <NavLink className="brand" to="/">
        <span className="brand-mark">
          <FiZap />
        </span>
        <span>LectureLens AI</span>
      </NavLink>

      <button className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
        {open ? <FiX /> : <FiMenu />}
      </button>

      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Primary navigation">
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/dashboard" onClick={() => setOpen(false)}>
          Dashboard
        </NavLink>
        <NavLink to="/history" onClick={() => setOpen(false)}>
          History
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
