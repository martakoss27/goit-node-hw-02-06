import express from "express";

import authMiddleware from "../../middlewares/jwt.js";
import { signUp } from "../../controllers/users/signupUser.js";
import { login } from "../../controllers/users/loginUser.js";
import { logout } from "../../controllers/users/logoutUser.js";
import { currentUser } from "../../controllers/users/currentUser.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/logout", authMiddleware, logout);
router.get("/current", authMiddleware, currentUser);

export default router;
