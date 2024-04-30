import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../src/component/Login';
import HomePage from '../src/component/Homepage'; // Make sure this component exists
import TemplateEdit from '../src/component/TemplateEdit'; // Make sure this component exists
import Dashboard from '../src/component/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/home" element={<HomePage />} />
        <Route path="/TemplateEdit" element={<TemplateEdit />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
