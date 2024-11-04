import React from "react";
import { Home, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 p-4">
      <div className="flex flex-col justify-between h-full w-full items-center">
        <div className="flex flex-col space-y-4 items-center">
          <Link
            className="hover:scale-125 active:scale-150 transition-all w-12"
            to="/"
          >
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <Link className="btn btn-ghost" to="/">
            <Home className="w-6 h-6" />
          </Link>
          <Link className="btn btn-ghost" to="/create">
            <Plus className="w-6 h-6" />
          </Link>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <Link className="btn btn-ghost" to="/signup">
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
