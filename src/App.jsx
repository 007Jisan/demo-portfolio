import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-teal-400 selection:text-slate-950">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
