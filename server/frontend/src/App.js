import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register"; // ✅ import Register

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/register" element={<Register />} /> {/* ✅ add Register route */}
        {/* Add more routes here later, like Home, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
