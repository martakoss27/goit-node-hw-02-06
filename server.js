import { app } from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});
