import { Axios } from "./axios";

export interface IGetAllAgentBookings {
  success: boolean;
  message: string;
  data: {
    bookings?: IDashboardBookingData[];
    totalCount?: number;
    currentPage?: number;
    pageSize?: number;
  };
}

export interface IDashboardBookingData {
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

export const GetALLAgentBookings = async (data?: GetAllBookingProps) => {
  try {
    let pageination = "";
    if (data) pageination = `?page=${data.page}&pageSize=${data.pageSize}`;
    const response = await Axios.get<IGetAllAgentBookings>(
      `/agent/bookings${pageination}`
    );
    if (response.data.success) return response.data.data;
  } catch (error) {}
};

//

export const GetAgentBookingById = async (id: number) => {
  try {
    const response = await Axios.get<IGetAllAgentBookings>(
      `/sabre/flights/booking/${id}`
    );
    if (response.data.success) return response.data.data;
  } catch (error) {}
};

//

interface IUpdateBookingStatusByBookingIdResponse {
  success: boolean;
  message: string;
}

export interface IBookingStatusUpdate {
  status: string;
}

export const UpdateBookingStatusByBookingId = async (
  id: number,
  body: IBookingStatusUpdate
) => {
  return await Axios.patch<IUpdateBookingStatusByBookingIdResponse>(
    `/admin/bookings/update-status/${id}`,
    body
  );
};

//
type GetAllBookingProps = {
  page?: number;
  pageSize?: number;
};

export const GetAdminBookings = async (data?: GetAllBookingProps) => {
  try {
    let pageination = "";
    if (data) pageination = `?page=${data.page}&pageSize=${data.pageSize}`;
    const response = await Axios.get<IGetAllAgentBookings>(
      `/admin/bookings${pageination}`
    );
    if (response.data.success) return response.data.data;
  } catch (error) {}
};

//

export interface IDashboardResponse {
  success: boolean;
  message: string;
  data: AgentDashBoardData | AdminDashBoardData;
}

export type AgentDashBoardData = {
  totalUser: number;
  totalBookings: number;
  wallet: string;
  transactionLimit?: string;
};

export type AdminDashBoardData = {
  totalUser: number;
  totalAgent: number;
  totalBookings: number;
  totalTopup: number;
};

export const GetDashboard = async () => {
  try {
    const response = await Axios.get<IDashboardResponse>(`/dashboard`);
    if (response.data.success) return response.data.data;
  } catch (error) {}
};
