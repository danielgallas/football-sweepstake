import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Thanks from "./pages/Thanks";
import Login from "./pages/Login";
// import CheckResults from "./pages/Admin";
import CheckResults2 from "./pages/Admin2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckResults2 />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/thanks" element={<Thanks />} />
        {/* <Route path="/results" element={<CheckResults />} /> */}
        {/* <Route path="/results" element={<CheckResults2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
