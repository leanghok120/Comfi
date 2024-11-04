import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model("Card", cardSchema);
export default Card;