import { Axios } from "./axios";

export interface IAgent {
  id: number;
  email: string;
  landline: string | null;
  mobile: string;
  country: string | null;
  city: string | null;
  travelAgentId: string;
  logo: string;
  representativeName: string;
  companyName: string | null;
  akama: string;
  status: number;
  creditLimit: number | null;
  serviceCharges: number | null;
  serviceChargesType: string | null;
  wallet: string;
  admin_id?: number;
  createdAt: string;
  updatedAt: string;
  AgentDocuments?: IAgentDocument[];
}

interface IAgentDocument {
  id?: number;
  name?: string;
  url?: string;
  agentId?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: IAgent[];
}

export const GetAllAgents = async () => {
  const response = await Axios.get<ApiResponse>("/admin/agents");
  return response.data.success && response.data.data;
};

//

interface IAgentApiResponse {
  success: boolean;
  message: string;
  data: IAgent;
}

export const GetAgentByAgentId = async (id: number) => {
  const response = await Axios.get<IAgentApiResponse>(`/admin/agents/${id}`);
  return response.data.success && response.data.data;
};

//

interface ITopUpResponse {
  success: true;
  message: string;
  data: {
    id: number;
    trx_id: string;
    agentId: number;
    topped_up_by: number;
    balance: number;
    description: number;
    transaction_type: number;
    updatedAt: Date | string;
    createdAt: Date | string;
  };
}

export interface ITopUpProps {
  agent_id: number;
  type: string;
  balance: number;
  description: string;
}

export const TopUpAgent = async (data: ITopUpProps) => {
  const response = await Axios.post<ITopUpResponse>(
    "/admin/agents/topup",
    data
  );
  return;
};

//
export interface ICreditLimitProps {
  creditLimit: string;
  agent_id: number;
}

export const UpdateCreditLimit = async (data: ICreditLimitProps) => {
  const response = await Axios.put<ITopUpResponse>(
    "/admin/agents/creditLimit",
    data
  );
  return;
};
