import { flightLand } from "@/data/Dashboard";

import React, { useEffect, useState } from "react";
import { flightTakeOff } from "../../data/Dashboard/index";
import Link from "next/link";

import {
  GetALLAgentBookings,
  GetAdminBookings,
  GetAgentBookingById,
  IDashboardBookingData,
} from "@/services/dashboard";
import moment from "moment";
import { parseCookies } from "nookies";
import Loader from "@/layouts/Loader";
import BookingHistoryModal from "./BookingHistoryModal";

const BookingHistory = () => {
  const cookies = parseCookies();
  const role = cookies.role;

  const [bookingData, setBookingData] = useState<
    IDashboardBookingData[] | undefined
  >([]);
  const [bookingID, setBookingID] = useState<any>();
  const [bookingIDModal, setBookingIDModal] = useState<any>();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id: number) => {
    if (id !== null) {
      setShow(true);
    }
    setBookingID(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (role === "admin") {
          const adminBookings = await GetAdminBookings();
          if (adminBookings && adminBookings.totalCount) {
            setBookingData(adminBookings.bookings);
          }
        } else {
          const agentBookings = await GetALLAgentBookings();
          if (agentBookings && agentBookings.totalCount) {
            setBookingData(agentBookings.bookings);
          }
        }
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    fetchData();
  }, [role]);

  useEffect(() => {
    if (bookingID) {
      const fetchData = () => {
        GetAgentBookingById(bookingID)
          .then((res) => setBookingIDModal(res))
          .catch((error) =>
            console.error("Error fetching booking data:", error)
          );
      };
      fetchData();
    }
  }, [bookingID]);

  return (
    <>
      {/* <div className="col-xxl-8"> */}
      <div className="w-100">
        <div className="card ">
          <div className="card-header">
            <div className="card-header-title">
              <h5>Booking History</h5>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive ">
              <table className=" dashboard-table table border-0 ">
                <thead>
                  <tr>
                    <th>
                      <span>Flight No</span>
                    </th>
                    <th>
                      <span>Origin</span>
                    </th>
                    <th>
                      <span />
                    </th>
                    <th>
                      <span>Departure Date</span>
                    </th>
                    <th>
                      <span />
                    </th>
                    <th>
                      <span>Arrival Date</span>
                    </th>
                    <th>
                      <span>Destination</span>
                    </th>
                    <th>
                      <span>Status</span>
                    </th>
                    <th>
                      <span>View</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookingData?.slice(0, 5).map((data: any, index: any) => (
                    <tr key={index}>
                      <td>
                        {/* <span className="fw-bolder">{data.airline}</span> */}
                        <span className="fw-bolder">{data.flight_no}</span>
                      </td>
                      <td>
                        <span className="fw-bolder">{data.origin}</span>
                      </td>
                      <td>{/* <span>{data.origin}</span> */}</td>
                      <td>
                        <span>
                          {" "}
                          {flightTakeOff()}
                          {moment(data.depart_date_time).format("MMMM Do YYYY")}
                        </span>
                      </td>
                      <td>
                        <span />
                      </td>
                      <td>
                        <span>
                          {flightLand()}
                          {moment(data.arrival_date_time).format(
                            "MMMM Do YYYY"
                          )}
                        </span>
                      </td>
                      <td>
                        <span className="fw-bolder mt-2">
                          {data.destination}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`mt-2 p-2 text-white badge text-capitalize badge-${
                            data.status === "pending"
                              ? "primary"
                              : data.status === "Cancelled"
                              ? "secondary"
                              : "success"
                          }`}
                        >
                          {data.status}
                        </span>
                      </td>
                      <td className="pt-3 text-right" align="left">
                        <span
                          onClick={() => handleShow(data?.itinerary_id)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: "#253C72",
                          }}
                        >
                          <i className="fa fa-eye" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href={"/booking"}>
              <button className="border mt-4 p-4 text-center w-100 rounded bg-primary ">
                Show All Bookings
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* MOVE This Modal To A Seprate File  */}
      <BookingHistoryModal
        show={show}
        handleClose={handleClose}
        bookingIDModal={bookingIDModal}
      />
    </>
  );
};

export default BookingHistory;
