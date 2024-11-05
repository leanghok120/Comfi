import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState([]);
  const endpoint = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchCards();
  }, []);

  async function fetchCards() {
    try {
      const res = await axios.get(`${endpoint}/cards`);
      setCards(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center m-8">
      <Navbar />
      <div className="flex flex-col items-center space-y-20">
        {cards.map((card, index) => (
          <div
            className="max-w-3xl bg-base-200 p-5 rounded-3xl shadow-lg border-4 border-base-300 inline-block"
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
