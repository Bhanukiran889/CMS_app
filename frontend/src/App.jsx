import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CMSPage from './pages/CMSPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cms" element={<CMSPage />} />
    </Routes>
  );
}

export default App;
