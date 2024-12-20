import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import DeleteBtn from "../components/DeleteBtn";
import SettingsBtn from "../components/SettingsBtn";

export default function Profile() {
  const endpoint = `${import.meta.env.VITE_BACKEND_URL}/users/me`;
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      setLoading(true);
      const res = await axios.get(endpoint, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      setUser(res.data.user);
      setPosts(res.data.posts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Navbar />
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <div className="my-10 p-10 bg-base-200 rounded-3xl w-96 relative motion-preset-pop">
        <SettingsBtn username={user.username} fetchUser={fetchUser} />
        <img
          src={user.pfp}
          alt="Profile Picture"
          className="w-20 rounded-full"
        />
        <h1 className="text-3xl font-black">{user.username}</h1>
        <div className="mt-8">
          <h2 className="font-bold text-2xl">Posts</h2>
          <div className="mt-2 space-y-8">
            {posts.map((post) => (
              <div className="relative" key={post._id}>
                <DeleteBtn id={post._id} fetchUser={fetchUser} />
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="rounded-2xl w-full"
                />
                <h2 className="font-semibold text-lg">{post.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
