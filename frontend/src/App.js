import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './features/auth/LoginPage';
import PlayersPage from './features/players/PlayersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/players" element={<PlayersPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
