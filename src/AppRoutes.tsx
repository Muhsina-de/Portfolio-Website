import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutMe } from './pages/AboutMe';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}; 