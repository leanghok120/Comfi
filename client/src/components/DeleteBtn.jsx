import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

export default function DeleteBtn({ id, fetchUser }) {
  const [loading, setLoading] = useState(false);
  const endpoint = `${import.meta.env.VITE_BACKEND_URL}/cards/${id}`;
  const token = localStorage.getItem("token");

  async function deletePost() {
    try {
      setLoading(true);
      await axios.delete(endpoint, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      fetchUser();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className="absolute top-5 right-5 text-error hover:scale-125 active:scale-150 transition-all"
      onClick={deletePost}
      disabled={loading}
    >
      {loading ? <span className="loading loading-spinner loading-sm"></span> : <X />}
    </button>
  );
}
