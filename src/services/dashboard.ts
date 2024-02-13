import { Axios } from "./axios";

interface IGetAllAgentBookings {
  success: boolean;
  message: string;
  data: {
    bookings?: IGETALLAGENTBOOKINGDATA[];
    totalCount?: number;
    currentPage?: number;
    pageSize?: number;
  };
}

export interface IGETALLAGENTBOOKINGDATA {
  id: number;
  itinerary_id: string;
  origin: string;
  destination: string;
  arrival_date_time: string;
  depart_date_time: string;
  flight_no: string;
  airline: string;
  agent_id: number;
  status: string;
  cost: number;
  createdAt: string;
  updatedAt: string;
}

export const GetALLAgentBookings = async () => {
  try {
    const response = await Axios.get<IGetAllAgentBookings>("/agent/bookings");
    if (response.data.success) return response.data.data;
  } catch (error) {}
};

export const GetAgentBookings = async (id: number) => {
  try {
    const response = await Axios.get<IGetAllAgentBookings>(
      `/sabre/flights/booking/${id}`
    );
    if (response.data.success) return response.data.data;
  } catch (error) {}
};

export const GetDashboard = async () => {
  try {
    const response = await Axios.get<IGetAllAgentBookings>(`/dashboard`);
    if (response.data.success) return response.data.data;
  } catch (error) {}
};
