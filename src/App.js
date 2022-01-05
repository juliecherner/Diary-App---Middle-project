import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Diary from "./pages/diary/Diary";
import Analytics from "./pages/analytics/Analytics";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

import "./App.css";

const App = () => {
  return (
    <Router>
      <nav className="header">
        <Link className="header-element" to="/">
          Home
        </Link>
        <Link className="header-element" to="/diary">
          Diary
        </Link>
        <Link className="header-element" to="/analytics">
          Analytics
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
