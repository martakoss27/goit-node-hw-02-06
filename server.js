import { app } from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const uriDB = process.env.DB_HOST;

const connection = mongoose.connect(uriDB);

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, function () {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
  });

//app.listen(3000, () => {
//console.log("Server is running. Use our API on port: 3000");
//});
