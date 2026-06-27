import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar/Sidebar.jsx';
import Navbar from '../components/common/Navbar/Navbar.jsx';

function DashboardLayout() {
  return (
    <div className="dashboard-shell">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar compact />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
