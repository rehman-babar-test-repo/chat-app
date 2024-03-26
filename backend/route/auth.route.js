import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const router = express.Router();

// router.post("/signup", signup)
router.route("/signup").post(signup)
router.post("/logout", logout)
router.post("/login", login)

export default router