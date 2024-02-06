"use client";
// import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });

  return (
    <div className="col-lg-6 col-xxl-4">
      <div className="datepicker-dashboard card">
        <div className="datepicker-here">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            inline
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
