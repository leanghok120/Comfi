import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

export default function ProfileBtn() {
  let page = "/signup";
  const token = localStorage.getItem("token");
  if (token) {
    page = "/profile";
  }

  return (
    <>
      <Link className="btn btn-ghost" to={page}>
        <User className="w-6 h-6" />
      </Link>
    </>
  );
}
