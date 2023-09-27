import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register.jsx";
import Authenticate from "./components/Authenticate.jsx";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Register token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;
