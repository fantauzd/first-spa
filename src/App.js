import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={ <AboutPage />}></Route>
            <Route path="/contact" element={ <ContactPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;