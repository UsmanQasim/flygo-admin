"use client";
import AllUsersTable from "@/components/Users/AllUsers";
import React, { useEffect, useState } from "react";
import PaginationBox from "@/Common/PaginationBox";
import CommonCardHeader from "@/Common/CommonCardHeader";
import { parseCookies } from "nookies";
import { GetAllAgents, IAgent } from "@/services/users";

const AllUsers = () => {
  const cookies = parseCookies();
  const role = cookies.role;

  const [agents, setAgents] = useState<IAgent[] | undefined>([]);

  // GET AGENTS LIST
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (role === "admin") {
          const agents = await GetAllAgents();
          if (agents) setAgents(agents);
        }
      } catch (error) {
        console.error("Error fetching Agents:", error);
      }
    };

    fetchData();
  }, [role]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <CommonCardHeader navigate="/users/adduser" tittle="All Agents" />
            <div>
              <div className="table-responsive table-desi">
                <AllUsersTable agents={agents} />
              </div>
            </div>
            {/* <div className="w-100 d-flex mt-4">
              <PaginationBox
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                onPageChange={handlePageChange}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
