import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './Home';
import Phong from './Phong/Phong';
import Themphong from './Phong/Themphong';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phong" element={<Phong />} />
      <Route path="/phong/themphong" element={<Themphong />} />
      </Routes>
    </Router>
  );
}

export default App;
