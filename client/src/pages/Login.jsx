import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [loading, setLoading] = useState(false);
  const endpoint = `${import.meta.env.VITE_BACKEND_URL}/users/login`;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(endpoint, { username, password });
      localStorage.setItem("token", res.data);
      navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <h1 className="text-5xl font-black">Login</h1>
      <form
        className="mt-10 flex flex-col gap-2 bg-base-200 p-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsername(e.target.value)}
          maxLength="20"
          required={true}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassowrd(e.target.value)}
          required={true}
          disabled={loading}
        />
        <button className="btn btn-primary" disabled={loading}>
          {loading ? <span className="loading loading-spinner"></span> : "Login"}
        </button>
        <Link className="link mt-3" to="/signup">
          Don't have an account?
        </Link>
      </form>
    </div>
  );
}
