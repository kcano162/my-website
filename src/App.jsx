import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import LinksPage from "./components/LinksPage";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/my-website/">
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
