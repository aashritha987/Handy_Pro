import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authServices";
import {createService} from "../services/serviceService";
import User from "../models/User";

export const register = async (req: Request, res: Response) => {
  try {
    const {formData, formDataBusiness} = req.body;
    const { firstName, email, token, userId, role } = await registerUser(formData);
    formDataBusiness.provider = userId;
    await createService(formDataBusiness);
    
    res.status(201).json({
      firstName,
      email,
      token,
      userId,
      role
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Registration Error:", err.message);
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { firstName, token, userId, role } = await loginUser(email, password);

    res.status(200).json({
      firstName,
      email,
      token,
      userId,
      role
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Login Error:", err.message);
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};


export const getProviders = async (req: Request, res: Response) => {
  try {
    const providers = await User.find({ role:"provider" });
    res.status(200).json(providers);
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
}
