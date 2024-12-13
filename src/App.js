import React from 'react';
import {  HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;