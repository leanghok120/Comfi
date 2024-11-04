import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
