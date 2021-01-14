import express from "express";
import { loginUser, getUserProfile } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/login", loginUser);
router.route("/profile").get(protect, getUserProfile);
export default router;
