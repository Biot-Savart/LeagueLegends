import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import LoginPage from "./features/auth/LoginPage";
import PlayersPage from "./features/players/PlayersPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/players"
            element={
              <ProtectedRoute>
                <PlayersPage />
              </ProtectedRoute>
            }
          />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
