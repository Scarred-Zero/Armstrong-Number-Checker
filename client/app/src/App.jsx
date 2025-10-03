import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthRoutes from "./routes/AuthRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import UserRoutes from "./routes/UserRoutes"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="secure/*" element={<AuthRoutes />} />
        <Route path="user/*" element={<UserRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
