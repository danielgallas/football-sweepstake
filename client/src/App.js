import "./App.css";
import Login from "./pages/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Login />;
  } else {
    return <Dashboard />;
  }
}

export default App;
