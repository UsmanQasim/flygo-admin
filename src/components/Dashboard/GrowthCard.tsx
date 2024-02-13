import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { GetDashboard } from "@/services/dashboard";
import { useEffect, useState } from "react";

const GrowthCard = () => {
  const [dashboardData, setDashboardData] = useState<any | null>({});

  useEffect(() => {
    const fetchData = () => {
      GetDashboard()
        .then((res) => setDashboardData(res))
        .catch((error) => console.error("Error fetching booking data:", error));
    };

    fetchData();
  }, []);

  const growthCardData = [
    {
      color: "primary",
      title: "Available Balance",
      counter: dashboardData?.wallet || 0,
      icon: "DollarSign",
      growth: true,
      number: "1-bg",
    },
    // {
    //   color: "secondary",
    //   title: "Transaction Limit",
    //   counter: dashboardData?.transactionLimit || 0,
    //   icon: "Pocket",
    //   growth: true,
    //   number: "3-bg",
    // },
    {
      color: "danger",
      title: "Total Booking",
      counter: dashboardData?.totalBookings || 0,
      icon: "ShoppingBag",
      number: "2-bg",
    },
    // {
    //   color: "success",
    //   title: "Total User",
    //   counter: dashboardData?.totalUser || 0,
    //   icon: "UserPlus",
    //   number: "4-bg",
    // },
  ];

  return (
    <>
      {growthCardData.map((data, index) => (
        <div className="col-sm-6 col-md-6 col-xxl-6 col-lg-6" key={index}>
          <div className={`b-b-${data.color} border-5 border-0 card o-hidden`}>
            <div className={`custome-${data.number} b-r-4 card-body`}>
              <div className="media align-items-center static-top-widget">
                <div className="media-body p-0">
                  <span className="m-0">{data.title}</span>
                  <h4 className="mb-0 counter">
                    {data.counter}
                    <span
                      className={`badge ms-2 badge-light-${data.color} grow  `}
                    >
                      {/* <DynamicFeatherIcon
                        iconName={data.growth ? "TrendingUp" : "TrendingDown"}
                      />
                      8.5% */}
                    </span>
                  </h4>
                </div>
                {/* <div className="align-self-center text-center">
                  <DynamicFeatherIcon
                    iconName={data.growth ? "TrendingUp" : "TrendingDown"}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GrowthCard;
