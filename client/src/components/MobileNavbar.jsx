import React from "react";
import { Home, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full p-2 bg-base-200 flex justify-around items-center">
      <Link className="btn btn-ghost" to="/">
        <Home className="w-6 h-6" />
      </Link>
      <Link className="btn btn-ghost" to="/create">
        <Plus className="w-6 h-6" />
      </Link>
      <Link className="btn btn-ghost" to="/signup">
        <User className="w-6 h-6" />
      </Link>
    </div>
  );
}
