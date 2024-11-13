import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <div className="my-10 p-10 bg-base-200 rounded-3xl w-96 relative motion-preset-pop">
        <h1 className="text-3xl font-black">About Me</h1>
        <p className="text-md mt-4">
          Hey! My name is Leanghok, I'm a fullstack developer and I built this
          app. I would like to thank you for checking out this app, it really
          means a lot to me!
        </p>
        <h2 className="text-2xl font-bold mt-5">Socials</h2>
        <div className="mt-4 flex flex-col gap-2">
          <a
            className="btn btn-primary"
            href="https://github.com/leanghok120/comfi"
            target="_blank"
          >
            Github
          </a>
          <a
            className="btn btn-primary"
            href="https://x.com/leangphok"
            target="_blank"
          >
            Twitter or X
          </a>
          <a
            className="btn btn-primary"
            href="https://leanghok.vercel.app"
            target="_blank"
          >
            My Site
          </a>
        </div>
      </div>
    </div>
  );
}
