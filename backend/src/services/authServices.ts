import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
import { Types } from "mongoose";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

const generateToken = (userId: string, role: string) => {
  return jwt.sign({ id: userId, role }, JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const registerUser = async (
  userData: any 
): Promise<{ firstName: string; email: string; token: string; userId: object; role: string; }> => {
  try {
    const { email, password } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    userData.password = hashedPassword;
    const user = new User(userData);
    await user.save();

    if (!user._id) {
      throw new Error("Registration failed");
    }
    const token = generateToken(user._id.toString(), user.role);
    return { firstName: user.firstName, email: user.email, token, userId: user._id, role: user.role };
  } catch (error) {
    console.error("Registration Error:", error);
    throw new Error("User registration failed");
  }
};


export const loginUser = async (
  email: string,
  password: string
): Promise<{ firstName: string; token: string; userId: object; role: string; }> => {
  const user = (await User.findOne({ email })) as
    | (IUser & { _id: Types.ObjectId })
    | null;
  if (!user) throw new Error("Invalid email");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Wrong password");

  const token = generateToken(user._id.toString(), user.role);
  const {firstName,_id} = user;

  return { firstName, token, userId: _id, role: user.role };
};
