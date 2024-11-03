import Card from "../models/Card.js";

// Get all cards
export const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cards" });
  }
};

// Create a new card
export const createCard = async (req, res) => {
  try {
    const { title } = req.body;
    const imageUrl = req.file ? req.file.path : null;

    if (!imageUrl) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const card = new Card({ imageUrl, title });
    await card.save();

    res.status(201).json({ message: "Card created successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to create card" });
  }
};

// Delete a card
export const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);

    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    await Card.deleteOne(card);
    res.json({ message: "Card removed successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete card" });
  }
};
