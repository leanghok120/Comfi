import React from "react";
import { Settings } from "lucide-react";
import LogoutBtn from "./LogoutBtn";

export default function SettingsBtn() {
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
          <h3 className="font-bold text-2xl">Settings</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
          <LogoutBtn />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
