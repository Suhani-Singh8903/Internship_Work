import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdditionalDetails from "./components/AdditionalDetails";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null); // Stores user data

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/details" element={<AdditionalDetails user={user} setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
      </Routes>
    </Router>
    
  );
}

export default App;
