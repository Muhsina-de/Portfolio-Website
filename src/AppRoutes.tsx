/**
 * Main routing configuration for the application
 * Defines all available routes and their corresponding components
 * Includes a fallback route that redirects to the home page
 */

import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutMe } from './pages/AboutMe';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Home page - About Me */}
      <Route path="/" element={<AboutMe />} />
      
      {/* Portfolio page - Project showcase */}
      <Route path="/portfolio" element={<Portfolio />} />
      
      {/* Contact page - Get in touch form */}
      <Route path="/contact" element={<Contact />} />
      
      {/* Resume page - Technical profile */}
      <Route path="/resume" element={<Resume />} />
      
      {/* Fallback route - Redirects to home page for unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}; 