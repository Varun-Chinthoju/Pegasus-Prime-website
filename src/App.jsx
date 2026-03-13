import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Robot from './pages/Robot';
import Build from './pages/Build';
import Code from './pages/Code';
import Sponsors from './pages/Sponsors';
import News from './pages/News';
import Team from './pages/Team';

// App intentionally does NOT include a Router here.
// - In CSR (dev/browser), main.jsx wraps it with BrowserRouter.
// - In SSR (prerender), entry-server.jsx wraps it with StaticRouter.
// This gives us a single App that works cleanly in both environments.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="robot" element={<Robot />} />
        <Route path="build" element={<Build />} />
        <Route path="code" element={<Code />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  );
}

export default App;
