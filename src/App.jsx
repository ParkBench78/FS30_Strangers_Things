// FS30-StrangersThings-App.jsx

import "./index.css";
import "./API/api.js";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostList from "./components/PostList.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div id="container">
        <div className="navbar">
          <h1 className="spacer">Stranger's Things</h1>
          <Link className="link" to="/">
            LOGIN
          </Link>
          <Link className="link" to="/postlist">
            POSTS
          </Link>
          {token && (
            <Link className="link" to="/profile">
              PROFILE
            </Link>
          )}
          <Link className="link" to="/signup">
            SIGN UP
          </Link>
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={<LoginForm token={token} setToken={setToken} />}
            />
            <Route path="/postlist" element={<PostList token={token} />} />
            {token && (
              <Route path="/profile" element={<Profile token={token} />} />
            )}

            <Route path="/signup" element={<SignUp setToken={setToken} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
