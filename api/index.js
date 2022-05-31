import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
// import usersRoute from "./routes/users.js";
// import hotelsRoute from "./routes/hotels.js";
// import roomsRoute from "./routes/rooms.js";

dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection successful");
  } catch (err) {
    throw err;
  }
};

// middlewares
app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
// app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected to server");
});
