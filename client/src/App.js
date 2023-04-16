import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Thanks from "./pages/Thanks";
import CheckResults from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/results" element={<CheckResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
