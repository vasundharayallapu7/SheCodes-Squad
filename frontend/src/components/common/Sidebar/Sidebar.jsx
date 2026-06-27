import { NavLink } from 'react-router-dom';
import { FiActivity, FiBookOpen, FiClock, FiHome, FiLayers } from 'react-icons/fi';
import './Sidebar.css';

const links = [
  { to: '/', label: 'Home', icon: <FiHome /> },
  { to: '/dashboard', label: 'Dashboard', icon: <FiActivity /> },
  { to: '/history', label: 'History', icon: <FiClock /> },
  { to: '/about', label: 'About', icon: <FiBookOpen /> },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <FiLayers />
        <span>LectureLens</span>
      </div>
      <nav className="sidebar-links" aria-label="Dashboard navigation">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
