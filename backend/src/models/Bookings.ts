import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
  customer: mongoose.Types.ObjectId;
  provider: mongoose.Types.ObjectId;
  service: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  date: Date;
  amount: string;
}

const BookingSchema = new Schema<IBooking>({
  customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
  provider: { type: Schema.Types.ObjectId, ref: "User", required: true },
  service: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending",
  },
  date: { type: Date, required: true, default: Date.now() },
  amount: { type: String, required: true },
});

export default mongoose.model<IBooking>("Booking", BookingSchema);
