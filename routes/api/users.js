import express from "express";

import authMiddleware from "../../middlewares/jwt.js";
import { signUp } from "../../controllers/users/signupUser.js";
import { login } from "../../controllers/users/loginUser.js";
import { logout } from "../../controllers/users/logoutUser.js";
import { currentUser } from "../../controllers/users/currentUser.js";
import { updateUserAvatar } from "../../controllers/users/updateUserAvatar.js";
import { upload } from "../../multer/multerConfig.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/logout", authMiddleware, logout);
router.get("/current", authMiddleware, currentUser);
router.patch(
  "/avatars",
  authMiddleware,
  upload.single("avatar"),
  updateUserAvatar
);

export default router;
