import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import upload from "../config/multer.js";
import {
  signup,
  login,
  getMe,
  updateMe,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", verifyToken, getMe);
router.patch("/me", [upload.single("pfp"), verifyToken], updateMe);

export default router;
