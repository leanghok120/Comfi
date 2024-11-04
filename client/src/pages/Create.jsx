import React from "react";
import Navbar from "../components/Navbar";

export default function Create() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Navbar />
      <h1 className="text-5xl font-black">Create</h1>
      <form
        className="mt-10 flex flex-col gap-2 bg-base-200 p-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs"
          required="true"
        />
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          accept="image/*, .gif"
        />
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}
