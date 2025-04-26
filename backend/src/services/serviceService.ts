import Service, { IService } from "../models/Service";

export const createService = async (serviceData: IService) => {
  return await Service.create(serviceData);
};

export const getAllServices = async () => {
  return await Service.find().populate("provider", "firstName lastName email");
};

export const getServiceById = async (id: string) => {
  return await Service.findById(id);
};

export const searchServices = async (filters: any) => {
  return await Service.find(filters);
};

export const updateService = async (
  id: string,
  updatedData: Partial<IService>
) => {
  return await Service.findByIdAndUpdate(id, updatedData, { new: true });
};

export const deleteService = async (id: string) => {
  return await Service.findByIdAndDelete(id);
};
