import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import {
  AdminDashBoardData,
  AgentDashBoardData,
  GetDashboard,
} from "@/services/dashboard";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

const GrowthCard = () => {
  const [dashboardData, setDashboardData] = useState<
    AgentDashBoardData | AdminDashBoardData | null
  >();
  const cookies = parseCookies();
  const role = cookies.role;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetDashboard();
        if (response) setDashboardData(response);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  if (!dashboardData) {
    return <p>Loading...</p>;
  }

  let growthCardData: { [key: string]: any }[] = [];
  if (role === "admin") {
    const adminData = dashboardData as AdminDashBoardData;
    growthCardData = [
      {
        color: "success",
        title: "Total Users",
        counter: adminData.totalUser || 0,
        icon: "Users",
        number: "1-bg",
      },
      {
        color: "info",
        title: "Total Agents",
        counter: adminData.totalAgent || 0,
        icon: "UserCheck",
        number: "2-bg",
      },
      {
        color: "danger",
        title: "Total Bookings",
        counter: adminData.totalBookings || 0,
        icon: "BookOpen",
        number: "3-bg",
      },
      {
        color: "warning",
        title: "Total Top-ups",
        counter: adminData.totalTopup || 0,
        icon: "DollarSign",
        number: "4-bg",
      },
    ];
  } else {
    const agentData = dashboardData as AgentDashBoardData;
    growthCardData = [
      {
        color: "primary",
        title: "Available Balance",
        counter: agentData.wallet || 0,
        icon: "DollarSign",
        growth: true,
        number: "1-bg",
      },
      {
        color: "danger",
        title: "Total Booking",
        counter: agentData.totalBookings || 0,
        icon: "ShoppingBag",
        number: "2-bg",
      },
    ];
  }

  return (
    <>
      {growthCardData.map((data, index) => (
        <div
          className={`col-sm-6 ${
            role === "admin" ? "col-md-3 col-xxl-3" : "col-md-6 col-xxl-6"
          }   col-lg-6`}
          key={index}
        >
          <div className={`b-b-${data.color} border-5 border-0 card o-hidden`}>
            <div className={`custome-${data.number} b-r-4 card-body`}>
              <div className="media align-items-center static-top-widget">
                <div className="media-body p-0">
                  <span className="m-0">{data.title}</span>
                  <h4 className="mb-0 counter">
                    {data.counter}
                    <span
                      className={`badge ms-2 badge-light-${data.color} grow  `}
                    ></span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GrowthCard;
