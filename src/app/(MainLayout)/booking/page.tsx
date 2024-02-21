"use client";
import React, { useEffect, useState } from "react";
import PaginationBox from "@/Common/PaginationBox";
import {
  GetALLAgentBookings,
  GetAdminBookings,
  GetAgentBookingById,
  IBookingStatusUpdate,
  IDashboardBookingData,
  UpdateBookingStatusByBookingId,
} from "@/services/dashboard";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";
import { parseCookies } from "nookies";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import BookingHistoryModal from "@/components/Dashboard/BookingHistoryModal";

const Booking = () => {
  const cookies = parseCookies();
  const role = cookies.role;

  const [bookingData, setBookingData] = useState<
    IDashboardBookingData[] | undefined
  >([]);
  const [bookingID, setBookingID] = useState<number>();
  const [bookingIDModal, setBookingIDModal] = useState<any>();
  const [show, setShow] = useState(false);

  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleClose = () => setShow(false);
  const handleShow = (id: number) => {
    if (id !== null) {
      setShow(true);
    }
    setBookingID(id);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, role]);

  const fetchData = async () => {
    try {
      let bookingsData = [];
      let totalCountValue = 0;

      if (role === "admin") {
        const adminBookings = await GetAdminBookings({
          page: currentPage,
          pageSize: pageSize,
        });
        bookingsData = adminBookings?.bookings ?? [];
        totalCountValue = adminBookings?.totalCount ?? 0;
      } else {
        const agentBookings = await GetALLAgentBookings({
          page: currentPage,
          pageSize: pageSize,
        });
        bookingsData = agentBookings?.bookings ?? [];
        totalCountValue = agentBookings?.totalCount ?? 0;
      }

      setBookingData(bookingsData);
      setTotalCount(totalCountValue);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  useEffect(() => {
    if (bookingID) {
      fetchDataById();
    }
  }, [bookingID]);

  const fetchDataById = async () => {
    try {
      if (!bookingID) return;
      const res = await GetAgentBookingById(bookingID);
      if (res) {
        setBookingIDModal(res);
      }
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      const data: IBookingStatusUpdate = {
        status: newStatus,
      };
      const response = await UpdateBookingStatusByBookingId(id, data);

      toast.success(response.data.message);

      if (response.status === 200) {
        fetchData();
        setCurrentPage(0);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header  card-header--2">
              <h5>All Bookings</h5>
            </div>
            <div>
              <div className="table-responsive table-desi">
                <table className="Booking-table table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Flight No.</th>
                      <th>Title</th>
                      <th>Arrival Date / Time</th>
                      <th>Departure Date / Time</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingData?.map((data: any, index: number) => (
                      <tr key={index}>
                        <td>
                          <span className="d-block ">{data.id}</span>
                        </td>
                        <td>
                          <span className="d-block ">{data.flight_no}</span>
                        </td>
                        <td>
                          <span className="">{data.origin} </span>
                          <strong> To </strong>
                          <span className=" "> {data.destination}</span>
                        </td>
                        <td>
                          {moment(data.arrival_date_time).format(
                            "MMM Do YYYY, h:mm A"
                          )}
                        </td>
                        <td>
                          {moment(data.depart_date_time).format(
                            "MMM Do YYYY, h:mm A"
                          )}
                        </td>
                        <td>
                          {role === "admin" ? (
                            <Form.Select
                              className={`text-white text-uppercase bg-${
                                data.status === "pending"
                                  ? "primary"
                                  : data.status === "Cancelled"
                                  ? "secondary"
                                  : "success"
                              }`}
                              defaultValue={data.status || ""}
                              onChange={(e) =>
                                handleStatusChange(data.id, e.target.value)
                              }
                            >
                              <option disabled>{data.status}</option>
                              <option value="pending">Pending</option>
                              <option value="Cancelled">Cancelled</option>
                              <option value="Completed">Completed</option>
                            </Form.Select>
                          ) : (
                            <span
                              className={`mt-2 p-2 text-white badge badge-${
                                data.status === "pending"
                                  ? "primary"
                                  : data.status === "Cancelled"
                                  ? "secondary"
                                  : "success"
                              }`}
                            >
                              {data.status}
                            </span>
                          )}
                        </td>
                        <td>
                          {/* <div id={`TooltipExample-${index + 1}`}>
                                <DynamicFeatherIcon iconName="X" />
                              </div>
                              <TooltipCommon
                                id={`TooltipExample-${index + 1}`}
                              /> */}
                          <a
                            onClick={() => handleShow(data?.itinerary_id)}
                            style={{ cursor: "pointer", fontSize: "20px" }}
                          >
                            <i className="fa fa-eye" color="#242523" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-100 d-flex mt-4">
              <PaginationBox
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <BookingHistoryModal
        show={show}
        handleClose={handleClose}
        bookingIDModal={bookingIDModal}
      />
    </div>
  );
};

export default Booking;
