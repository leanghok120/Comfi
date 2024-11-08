import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function LogoutBtn() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");

    navigate("/signup");
  }

  return (
    <button className="btn btn-error mt-10 w-full" onClick={handleLogout}>
      <LogOut /> Logout
    </button>
  );
}
