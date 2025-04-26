import express from "express";
import { register, login, getProviders } from "../controllers/authController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getProviders", getProviders);

export default router;
