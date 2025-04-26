import { Request, Response } from "express";
import Booking from "../models/Bookings";

export const getBookings = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      res.status(400).json({ success: false, message: "User ID is required" });
    } else {
      const bookings = await Booking.find({
        $or: [{ customer: userId }, { provider: userId }],
      })
        .populate("provider", "firstName lastName")
        .populate("customer", "firstName lastName");
      res.status(200).json({
        bookings,
      });
    }
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};

export const bookService = async (req: Request, res: Response) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(200).json({ message: "Booking successfull!!!" });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};

export const changeBookingStatus = async (req: Request, res: Response) => {
  try {
    const { _Id, status } = req.body;
    if (!_Id) {
      res.status(400).json({ message: "Booking Id is required!!!" });
    } else {
      const bookings = await Booking.findById(_Id);
      if (!bookings) {
        res.status(404).json({ message: "Booking not found" });
      } else {
        bookings.status = status;
        await bookings.save();
        res
          .status(200)
          .json({ message: "Booking status changes successfully!!!" });
      }
    }
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};
