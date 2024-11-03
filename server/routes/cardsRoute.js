import express from "express";
import multer from "multer";
import {
  getCards,
  createCard,
  deleteCard,
} from "../controllers/cardController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Define routes
router.get("/", getCards); // Get all cards
router.post("/", upload.single("image"), createCard); // Create a new card
router.delete("/:id", deleteCard); // Delete a card

export default router;
