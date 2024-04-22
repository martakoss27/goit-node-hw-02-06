import { app } from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { createFolderIsNotExist } from "./handlers/checkFolders.js";
import { storeImage, uploadDir } from "./multer/multerConfig.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const urlDB = process.env.DB_HOST;

const connection = mongoose.connect(urlDB);

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, function () {
      createFolderIsNotExist(uploadDir);
      createFolderIsNotExist(storeImage);
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });
