import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Robot from './pages/Robot';
import Build from './pages/Build';
import Code from './pages/Code';
import Sponsors from './pages/Sponsors';
import News from './pages/News';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="robot" element={<Robot />} />
          <Route path="build" element={<Build />} />
          <Route path="code" element={<Code />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
