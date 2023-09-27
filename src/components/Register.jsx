import { useState } from "react";
// import "./index.js";
const COHORT_NAME = "2306-FTB-ET-WEB-PT";
const APIURL = "https://strangers-things.herokuapp.com/api/${COHORT_NAME}";

function Register({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.length < 6 || password.length < 6) {
      alert("Username & Password must be greater than 5 characters.");
      return;
    }
    console.log("Form Submitted✅");

    try {
      const response = await fetch(`${APIURL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: { username },
          password: { password },
        }),
      });
      const result = await response.json();
      console.log(`Success! Token returned: ${result.token}`);
    } catch (err) {
      console.error(err);
      setError(error.message);
    }
  }
  return (
    <>
      <h1 className="login-title">Welcome</h1>
      {error && <p>{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            Username{" "}
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Password{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="login-buttton">
          Login
        </button>
      </form>
    </>
  );
}
export default Register;
