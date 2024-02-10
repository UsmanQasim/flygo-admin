"use client";

import { visitorOptions } from "@/data/Dashboard/ChartData";
import dynamic from "next/dynamic";
import VisitorChartHeader from "./VisitorChartHeader";

const VisitorsChart = () => {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

  return (
    <div className="col-xl-4">
      <div className="h-100">
        <div className="card o-hidden  ">
          <VisitorChartHeader />
          <div className="card-body ">
            <div className="pie-chart">
              <Chart
                options={visitorOptions}
                series={visitorOptions.series}
                type="donut"
                height={270}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorsChart;
