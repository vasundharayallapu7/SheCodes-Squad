import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar/Navbar.jsx';
import Footer from '../components/common/Footer/Footer.jsx';

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
