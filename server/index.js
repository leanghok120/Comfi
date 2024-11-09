import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cardsRoute from "./routes/cardsRoute.js";
import userRoutes from "./routes/usersRoute.js";
import cors from "cors";

const mongodbUri = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
  }),
);

// Connect to mongodb
mongoose.connect(mongodbUri);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to Mongodb"));

app.get("/", (req, res) => {
  res.json("Welcome to the server :3");
});

app.use("/uploads", express.static("uploads"));
app.use("/cards", cardsRoute);
app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
