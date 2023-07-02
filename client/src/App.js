import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Thanks from "./pages/Thanks";
import Login from "./pages/Login";
import CheckResults from "./pages/Admin";
import CheckResults2 from "./pages/Admin2";
import Loading from "./components/Loading";
import SetUser from "./pages/SetUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetUser />} />
        <Route path="/checkresults" element={<CheckResults />} />
        {/* <Route path="/" element={<CheckResults />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/results" element={<CheckResults2 />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/setuser" element={<SetUser />} />
        <Route path="/user/:username" element={<CheckResults2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
