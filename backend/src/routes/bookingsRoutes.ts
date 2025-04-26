import express from "express";
import { getBookings, bookService, changeBookingStatus } from "../controllers/bookingsController";

const router = express.Router();

router.post("/getBookings", getBookings);
router.post("/bookService", bookService);
router.post("/changeBookingStatus", changeBookingStatus);

export default router;
