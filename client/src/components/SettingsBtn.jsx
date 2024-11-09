import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import axios from "axios";
import LogoutBtn from "./LogoutBtn";

export default function SettingsBtn({ username, fetchUser }) {
  const [newUsername, setNewUsername] = useState(username);
  const [newPfp, setNewPfp] = useState(null);
  const [loading, setLoading] = useState(false);
  const endpoint = `${import.meta.env.VITE_BACKEND_URL}/users/me`;

  useEffect(() => {
    setNewUsername(username);
  }, [username]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const formData = new FormData();
      if (newUsername !== username) {
        formData.append("username", newUsername);
      }
      if (newPfp) {
        formData.append("pfp", newPfp);
      }

      await axios.patch(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      });
      fetchUser();

      document.getElementById("settings-modal").close();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => document.getElementById("settings-modal").showModal()}
        className="absolute top-5 right-5 transition-all hover:scale-125 active:scale-150"
      >
        <Settings />
      </button>
      <dialog id="settings-modal" className="modal">
        <div className="modal-box rounded-2xl w-96">
          <h1 className="font-black text-2xl">Edit Your Profile</h1>
          <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              maxLength="20"
              required={true}
              disabled={loading}
            />
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              accept="image/*, .gif"
              onChange={(e) => setNewPfp(e.target.files[0])}
              name="pfp"
              disabled={loading}
            />
            <button className="btn btn-primary" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Save Changes"}
            </button>
          </form>
          <LogoutBtn />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
