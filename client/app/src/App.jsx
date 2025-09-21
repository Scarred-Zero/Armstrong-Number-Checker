import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
// import './assets/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} /> 
        </Routes>
      <Footer />
      <ScrollUp /> 
    </Router>
  );
}

export default App;
