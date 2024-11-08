import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Create() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const endpoint = `${import.meta.env.VITE_BACKEND_URL}/cards`;

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token");

      await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `bearer ${token}`,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <h1 className="text-5xl font-black">Create</h1>
      <form
        className="mt-10 flex flex-col gap-2 bg-base-200 p-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setTitle(e.target.value)}
          required={true}
        />
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          accept="image/*, .gif"
          onChange={(e) => setImage(e.target.files[0])}
          name="image"
          required={true}
        />
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}
