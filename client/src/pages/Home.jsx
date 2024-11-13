import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Masonry from "react-masonry-css";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = import.meta.env.VITE_BACKEND_URL;

  const breakpoints = {
    default: 4,
    900: 3,
    700: 1,
  };

  useEffect(() => {
    fetchCards();
  }, []);

  async function fetchCards() {
    try {
      setLoading(true);
      const res = await axios.get(`${endpoint}/cards`);
      setCards(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center m-8">
        <Navbar />
        <div className="flex flex-col items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center m-8">
      <Navbar />
      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {cards.map((card, index) => (
          <div
            className="max-w-3xl bg-base-200 p-5 rounded-3xl shadow-lg border-4 border-base-300 inline-block motion-preset-fade"
            key={index}
          >
            <img
              src={card.imageUrl}
              alt="post image"
              className="rounded-xl w-full h-auto"
            />
            <h1 className="text-xl font-black mt-5 text-center">
              {card.title}
            </h1>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
