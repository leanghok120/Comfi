import React from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Navbar />
      <h1 className="text-5xl font-black">Login</h1>
      <form
        className="mt-10 flex flex-col gap-2 bg-base-200 p-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs"
          required="true"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          required="true"
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
