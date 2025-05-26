//Added new Code Here
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/register" element={<RegisterPanel />} />
        {/* Add more routes here later, like Register, Home, etc. */}
      </Routes>
    </Router>
  );
}

export default App;


//import LoginPanel from "./components/Login/Login"
//import { Routes, Route } from "react-router-dom";

//function App() {
  //return (
    //<Routes>
      //<Route path="/login" element={<LoginPanel />} />
    //</Routes>
  //);
//}
//export default App;
