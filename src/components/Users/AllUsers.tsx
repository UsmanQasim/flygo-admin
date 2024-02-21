"use client";
import moment from "moment";
import { useEffect, useState } from "react";
import { GetAgentByAgentId, IAgent } from "@/services/users";
import UserDetailModal from "@/app/(MainLayout)/users/UserDetailModal";

type AllUserTableProps = { agents: IAgent[] | undefined };

const AllUsersTable = ({ agents }: AllUserTableProps) => {
  const [agentId, setAgentId] = useState<number>();
  const [agentIdModal, setAgentIdModal] = useState<IAgent>();
  const [show, setShow] = useState(false);

  // Get AGENT BY AGENT ID
  const fetchData = (agentId: number) => {
    GetAgentByAgentId(agentId)
      .then((res) => {
        if (res) setAgentIdModal(res);
      })
      .catch((error) => console.error("Error fetching Agent data:", error));
  };

  useEffect(() => {
    if (agentId) {
      fetchData(agentId);
    }
  }, [agentId]);

  const handleShow = (id: number) => {
    if (id !== null) {
      setShow(true);
    }

    setAgentId(id);
  };

  return (
    <>
      <table className="user-table table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Wallet</th>
            <th>Created</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {agents &&
            agents.map((data: IAgent, index: number) => (
              <tr key={index}>
                <td>
                  <a>
                    <span className="d-block ">{data.id}</span>
                  </a>
                </td>
                <td>
                  <span className="">{data.representativeName} </span>
                </td>
                <td>
                  <span className="">{data.email} </span>
                </td>
                <td>
                  <span className="">{data.mobile} </span>
                </td>
                <td>
                  <span className="">{data.country} </span>
                </td>
                <td align="left">
                  <span className="">SAR {data.wallet} </span>
                </td>
                <td align="left">{moment(data.createdAt).format("LL")}</td>
                <td>
                  <a
                    onClick={() => data.id && handleShow(data?.id)}
                    style={{ cursor: "pointer", fontSize: "20px" }}
                  >
                    <i className="fa fa-eye" />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {agentIdModal ? (
        <UserDetailModal
          userData={agentIdModal}
          fetchData={(id: number) => fetchData(id)}
          modalOpen={show}
          toggleModal={() => setShow(false)}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default AllUsersTable;
