import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../src/component/Login';
import HomePage from '../src/component/Homepage'; // Make sure this component exists
import TemplateEdit from '../src/component/TemplateEdit'; // Make sure this component exists
import Dashboard from '../src/component/Dashboard';
import Speaker from '../src/component/SpeakerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/home" element={<HomePage />} />
        <Route path="/TemplateEdit" element={<TemplateEdit />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Speaker" element={<Speaker />} />
      </Routes>
    </Router>
  );
}

export default App;
