// FS30-StrangersThings-logni.jsx

import { useState } from "react";
import { APIURL } from "../API/api";

export default function LoginForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.length < 6 || password.length < 6) {
      alert("Username & Password must be greater than 5 characters");
      return;
    }
    const result = await login();

    if (result.success) {
      setToken(result.data.token);
      alert("Successful Login!🥂");
    } else {
      alert(`Bummer!😱 ${result.error.message}`);
    }

    console.log("Form Submitted✅");
  }
  return (
    <>
      <h1 className="login-title">Log In</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            Username
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="login-button">
          LOG IN
        </button>
      </form>
    </>
  );
}
