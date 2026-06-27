import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import Landing from '../pages/Landing/Landing.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import History from '../pages/History/History.jsx';
import About from '../pages/About/About.jsx';
import NotFound from '../pages/NotFound.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
