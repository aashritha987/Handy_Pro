import mongoose, { Document, Schema } from "mongoose";

export interface IService extends Document {
  provider: mongoose.Types.ObjectId;
  title: string;
  description: string;
  category: string;
  price: number;
  location: string;
}

const ServiceSchema = new Schema<IService>(
  {
    provider: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true }
  }
);

export default mongoose.model<IService>("Service", ServiceSchema);