import React from "react";
import { Home, Plus, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 p-4">
      <div className="flex flex-col justify-between h-full w-full items-center">
        <div className="flex flex-col space-y-4 items-center">
          <button className="hover:scale-125 active:scale-150 transition-all w-12">
            <img src="/logo.svg" alt="logo" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <button className="btn btn-ghost">
            <Home className="w-6 h-6" />
          </button>
          <button className="btn btn-ghost">
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <button className="btn btn-ghost">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}