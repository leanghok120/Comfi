import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const endpoint = `${import.meta.env.VITE_BACKEND_URL}/users`;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${endpoint}/signup`, { username, password });

      // Login
      const res = await axios.post(`${endpoint}/login`, { username, password });
      localStorage.setItem("token", res.data);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <h1 className="text-5xl font-black">Signup</h1>
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
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <button className="btn btn-primary">Signup</button>
        <Link className="link mt-3" to="/login">
          Already have an account?
        </Link>
      </form>
    </div>
  );
}
