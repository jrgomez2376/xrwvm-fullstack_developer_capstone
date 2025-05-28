import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";   // <-- import Home component
import About from "./components/About/About"; // <-- import About if you have it
import Contact from "./components/Contact/Contact"; // <-- import Contact if you have it

//New Code added 5.27.25
// Try importing optional components
let Home, About, Contact;
try {
  Home = require("./components/Home/Home").default;
} catch (e) {
  Home = () => <div>Home page coming soon...</div>;
}
try {
  About = require("./components/About/About").default;
} catch (e) {
  About = () => <div>About page coming soon...</div>;
}
try {
  Contact = require("./components/Contact/Contact").default;
} catch (e) {
  Contact = () => <div>Contact page coming soon...</div>;
}

//Delted Route to "home"
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPanel />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
