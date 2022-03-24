import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
