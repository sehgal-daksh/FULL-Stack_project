import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./Success";

function Home() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <div className="button-group">
          <a href="http://localhost:5050/auth/google" className="login-btn google">Continue with Google</a>
          <a href="http://localhost:5050/auth/facebook" className="login-btn facebook">Continue with Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}