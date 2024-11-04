import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const cards = [
    {
      title: "House Garden",
      imageUrl:
        "https://res.cloudinary.com/dfqab6zje/image/upload/v1730673076/comfi/sz5uzrexvkljoehfmnge.png",
    },
    {
      title: "The Wind Rises",
      imageUrl:
        "https://res.cloudinary.com/dfqab6zje/image/upload/v1730724309/comfi/emme4jbjeof085iipuzd.jpg",
    },
  ];

  return (
    <div className="flex justify-center items-start m-8">
      <Navbar />
      <div className="space-y-20">
        {cards.map((card, index) => (
          <div
            className="max-w-3xl bg-base-200 p-5 rounded-3xl shadow-lg border-4 border-base-300"
            key={index}
          >
            <img src={card.imageUrl} alt="post image" className="rounded-xl" />
            <h1 className="text-xl font-black mt-5 text-center">
              {card.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
