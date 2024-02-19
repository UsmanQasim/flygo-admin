import { flightLand } from "@/data/Dashboard";
import { ImagePath } from "@/utils/Constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { flightTakeOff } from "../../data/Dashboard/index";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Bold } from "react-feather";
import Button from "react-bootstrap/Button";
import {
  GetALLAgentBookings,
  GetAdminBookings,
  GetAgentBookingById,
  IDashboardBookingData,
} from "@/services/dashboard";
import moment from "moment";
import { parseCookies } from "nookies";
import Loader from "@/layouts/Loader";

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
          <div className="card-body ">
            <div className="table-responsive ">
              <table className=" dashboard-table table border-0 ">
                <thead>
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
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center", width: "100%" }}>
            Booking Details
          </Modal.Title>
        </Modal.Header>
        {bookingIDModal ? (
          <Modal.Body>
            <Container>
              <Row style={{ paddingTop: "10px" }}>
                <Col sm={6} style={{ fontWeight: "bold" }}>
                  Booking ID
                </Col>
                <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                  {bookingIDModal?.bookingId}
                </Col>
              </Row>
              <Row style={{ paddingTop: "10px" }}>
                <Col sm={6} style={{ fontWeight: "bold" }}>
                  Travellers Detail :
                </Col>
                <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}></Col>
              </Row>

              {bookingIDModal?.travelers.map((value: any) => (
                <div
                  className="container "
                  style={{
                    border: "1px solid #80808017",
                    backgroundColor: "#80808017",
                    borderRadius: "8px",
                    padding: "10px",
                    marginTop: "5px",
                  }}
                >
                  <Row>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Name
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {value.givenName} {}
                      {value.surname}
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Email
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {value.emails}
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Phone No.
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {value.phones[0].number}
                    </Col>
                  </Row>

                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Type
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {value.type}
                    </Col>
                  </Row>
                </div>
              ))}
              <Row style={{ paddingTop: "10px" }}>
                <Col sm={6} style={{ fontWeight: "bold" }}>
                  Flight Detail :
                </Col>
                <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}></Col>
              </Row>
              <div className="container">
                <br />
                <div className="d-flex align-items-center justify-content-between w-100 g-3">
                  <div className="d-flex align-items-center justify-content-center gap-3 w-25">
                    <div className="d-flex flex-column justify-content-start align-items-start">
                      <h4 className="m-0">
                        {bookingIDModal?.flights[0]?.fromAirportCode}
                      </h4>
                    </div>
                  </div>
                  <div className="w-50">
                    <hr />
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-3 w-25">
                    <div className="d-flex flex-column justify-content-start align-items-start">
                      <h4 className="m-0">
                        {bookingIDModal?.flights[0]?.toAirportCode}{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {bookingIDModal?.flights.map((data: any) => (
                <>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Flight No.
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {data.flightNumber}
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Flight Name
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {data.airlineName}
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Departure Date/Time
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {data.departureDate}
                      {" / "}
                      {data.departureTime}
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Arrival Date/Time
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {data.arrivalDate}
                      {" / "}
                      {data.arrivalTime}
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Terminal Name
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {data.arrivalTerminalName}
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Cabin Type
                    </Col>
                    <Col sm={6} style={{ color: "#253B74", fontWeight: 600 }}>
                      {data.cabinTypeName}
                    </Col>
                  </Row>
                </>
              ))}
            </Container>
          </Modal.Body>
        ) : (
          <img src={`${ImagePath}/loader/loader.gif`} alt="loader gif" />
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingHistory;
