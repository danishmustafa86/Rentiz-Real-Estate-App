// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Routing from './routing/routing';


function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <Routing />
        </div>
      </Router>
  );
}

export default App;