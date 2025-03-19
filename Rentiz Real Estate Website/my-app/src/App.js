// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Buying from './pages/buying/Buying';
import Renting from './pages/renting/Renting';
import Selling from './pages/selling/Selling';
import ContactUs from './pages/contact/Contact';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buying" element={<Buying />} />
          <Route path="/renting" element={<Renting />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;