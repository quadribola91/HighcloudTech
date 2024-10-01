import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Courses from './components/Courses'; 
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/About';

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header /> {/* Always displayed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer /> {/* Always displayed */}
      </div>
    </Router>
  );
};

export default App;
