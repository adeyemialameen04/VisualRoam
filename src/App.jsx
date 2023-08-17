import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <h1>Hello</h1>
    </Router>
  );
}

export default App;
