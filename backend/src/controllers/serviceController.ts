import { Request, Response } from "express";
import * as serviceService from "../services/serviceService";

// Create new service
export const createService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const service = await serviceService.createService(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error });
  }
};

// Get all services
export const getAllServices = async (_req: Request, res: Response) => {
  try {
    const services = await serviceService.getAllServices();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error });
  }
};

// Get service by ID
export const getServiceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const service = await serviceService.getServiceById(req.params.id);
    if (!service) res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service", error });
  }
};

// Search services
export const searchServices = async (req: Request, res: Response) => {
  try {
    const { category, location } = req.query;
    const filters: any = {};
    if (category) filters.category = category;
    if (location) filters.location = location;

    const services = await serviceService.searchServices(filters);
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error searching services", error });
  }
};

// Update service
export const updateService = async (req: Request, res: Response) => {
  try {
    const updatedService = await serviceService.updateService(
      req.params.id,
      req.body
    );
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error });
  }
};

// Delete service
export const deleteService = async (req: Request, res: Response) => {
  try {
    await serviceService.deleteService(req.params.id);
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error });
  }
};
