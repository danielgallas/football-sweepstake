import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import Thanks from "./pages/Thanks";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";
import CheckResults from "./pages/Admin";
import CheckResults2 from "./pages/Admin2";
import Loading from "./components/Loading";
import SetUser from "./pages/SetUser";
import Match from "./components/Match";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetUser />} />
        <Route path="/checkresults" element={<CheckResults />} />
        {/* <Route path="/" element={<CheckResults />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/match" element={<Match />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard2/:username" element={<Dashboard2 />} /> */}
        <Route path="/dashboard2/:username" element={<Thanks />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/results" element={<CheckResults />} />
        <Route path="/results2" element={<CheckResults2 />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/setuser" element={<SetUser />} />
        <Route path="/user/:username" element={<CheckResults2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
