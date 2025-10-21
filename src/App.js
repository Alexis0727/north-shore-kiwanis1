import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Welcome to North Shore Kiwanis</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/projects" element={<h1>Our Projects</h1>} />
        <Route path="/events" element={<h1>Events</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/donate" element={<h1>Donate</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
