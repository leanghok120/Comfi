import express from "express";
import upload from "../config/multer.js";
import {
  getCards,
  createCard,
  deleteCard,
} from "../controllers/cardController.js";

const router = express.Router();

// Define routes
router.get("/", getCards); // Get all cards
router.post("/", upload.single("image"), createCard); // Create a new card
router.delete("/:id", deleteCard); // Delete a card

export default router;
