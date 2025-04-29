import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";

function App() {
  const [user, setUser] = useState(null);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
        </Routes>
      </div>
  );
}

export default App;
