import { Axios } from "./axios";

interface IGetAllAgentBookings {
  success: boolean;
  message: string;
  data: [];
}

export const GetALLAgentBookings = async () => {
  try {
    const response = await Axios.get<IGetAllAgentBookings>("/agent/bookings");
    if (response.data.success) return response.data.data;
  } catch (error) {}
};

export const GetAgentBookings = async (id:number) => {
  try {
    const response = await Axios.get<IGetAllAgentBookings>(`/sabre/flights/booking/${id}`);
    if (response.data.success) return response.data.data;
  } catch (error) {}
};
export const GetDashboard = async () => {
  try {
    const response = await Axios.get<IGetAllAgentBookings>(`/dashboard`);
    if (response.data.success) return response.data.data;
  } catch (error) {}
};
