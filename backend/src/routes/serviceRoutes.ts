import express from "express";
import * as serviceController from "../controllers/serviceController";

const router = express.Router();

// Define routes correctly
router.post("/createService", serviceController.createService);
router.get("/getAllServices", serviceController.getAllServices);

export default router;