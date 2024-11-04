import React from "react";
import Navbar from "../components/Navbar";

export default function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Navbar />
      <h1 className="text-5xl font-black">Signup</h1>
      <form
        className="mt-10 flex flex-col gap-2 bg-base-200 p-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
}
