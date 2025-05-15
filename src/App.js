import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from'./pages/Portfolio';
import Services from './pages/Services';
import Mention from './pages/Mention';

import './App.css';

const App = () => {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mention" element={<Mention />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
