import React from "react";
import { X } from "lucide-react";
import axios from "axios";

export default function DeleteBtn({ id, fetchUser }) {
  const endpoint = `${import.meta.env.VITE_BACKEND_URL}/cards/${id}`;
  const token = localStorage.getItem("token");

  async function deletePost() {
    try {
      await axios.delete(endpoint, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      fetchUser();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      className="absolute top-5 right-5 text-error hover:scale-125 active:scale-150 transition-all"
      onClick={deletePost}
    >
      <X />
    </button>
  );
}
