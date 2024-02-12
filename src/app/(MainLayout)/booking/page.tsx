"use client";
import React, { useEffect, useState } from "react";
import PaginationBox from "@/Common/PaginationBox";
import { bookingTableData } from "@/data/booking";
import { Href } from "../../../utils/Constant";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import TooltipCommon from "@/Common/TooltipCommon";
import { GetALLAgentBookings, GetAgentBookings } from "@/services/dashboard";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";

const Booking = () => {
  const [bookingData, setBookingData] = useState<any>([]);
  const [bookingID, setBookingID] = useState<number>();
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
    const fetchData = () => {
      GetALLAgentBookings()
        .then((res) => setBookingData(res))
        .catch((error) => console.error("Error fetching booking data:", error));
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (bookingID) {
      const fetchData = () => {
        GetAgentBookings(bookingID)
          .then((res) => setBookingIDModal(res))
          .catch((error) =>
            console.error("Error fetching booking data:", error)
          );
      };
      fetchData();
    }
  }, [bookingID]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header  card-header--2">
              <h5>All Bookings</h5>
            </div>
            <div className="card-body">
              <div>
                <div className="table-responsive table-desi">
                  <table className="Booking-table table table-striped">
                    <thead>
                      <tr>
                        <th>Flight No.</th>
                        <th>Title</th>
                        <th>Arrival Date / Time</th>
                        <th>Departure Date / Time</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookingData?.bookings?.map(
                        (data: any, index: number) => (
                          <tr key={index}>
                            <td>
                              {/* <i className={`fa fa-${data.type}`}> </i> */}
                              <a>
                                <span className="d-block ">
                                  {data.flight_no}
                                </span>
                              </a>
                            </td>
                            <td>
                              <span className="">{data.origin} </span>
                              <strong> To </strong>
                              <span className=" "> {data.destination}</span>
                            </td>
                            <td>
                              {moment(data.arrival_date_time).format(
                                "MMMM Do YYYY, h:mm:ss A"
                              )}
                            </td>
                            <td>
                              {moment(data.depart_date_time).format(
                                "MMMM Do YYYY, h:mm:ss A"
                              )}
                            </td>
                            <td>
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
                                <i className="fa fa-eye" />
                              </a>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <PaginationBox />
          </div>
        </div>
      </div>
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
        <Modal.Body>
          <Container>
            <Row style={{ paddingTop: "10px" }}>
              <Col sm={6} style={{ fontWeight: "bold" }}>
                Booking ID
              </Col>
              <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                {bookingIDModal?.bookingId}
              </Col>
            </Row>
            <Row style={{ paddingTop: "10px" }}>
              <Col sm={6} style={{ fontWeight: "bold" }}>
                Travellers Detail :
              </Col>
              <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}></Col>
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
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {value.givenName} {}
                    {value.surname}
                  </Col>
                </Row>
                <Row style={{ paddingTop: "10px" }}>
                  <Col sm={6} style={{ fontWeight: "bold" }}>
                    Email
                  </Col>
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {value.emails}
                  </Col>
                </Row>
                <Row style={{ paddingTop: "10px" }}>
                  <Col sm={6} style={{ fontWeight: "bold" }}>
                    Phone No.
                  </Col>
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {value.phones[0].number}
                  </Col>
                </Row>

                <Row style={{ paddingTop: "10px" }}>
                  <Col sm={6} style={{ fontWeight: "bold" }}>
                    Type
                  </Col>
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {value.type}
                  </Col>
                </Row>
              </div>
            ))}
            <Row style={{ paddingTop: "10px" }}>
              <Col sm={6} style={{ fontWeight: "bold" }}>
                Flight Detail :
              </Col>
              <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}></Col>
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
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {data.flightNumber}
                  </Col>
                </Row>
                <Row style={{ paddingTop: "10px" }}>
                  <Col sm={6} style={{ fontWeight: "bold" }}>
                    Flight Name
                  </Col>
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {data.airlineName}
                  </Col>
                </Row>
                <Row style={{ paddingTop: "10px" }}>
                  <Col sm={6} style={{ fontWeight: "bold" }}>
                    Departure Date/Time
                  </Col>
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {data.departureDate}
                    {" / "}
                    {data.departureTime}
                  </Col>
                </Row>
                <Row style={{ paddingTop: "10px" }}>
                  <Col sm={6} style={{ fontWeight: "bold" }}>
                    Arrival Date/Time
                  </Col>
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {data.arrivalDate}
                    {" / "}
                    {data.arrivalTime}
                  </Col>
                </Row>
                <Row style={{ paddingTop: "10px" }}>
                  <Col sm={6} style={{ fontWeight: "bold" }}>
                    Terminal Name
                  </Col>
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {data.arrivalTerminalName}
                  </Col>
                </Row>
                <Row style={{ paddingTop: "10px" }}>
                  <Col sm={6} style={{ fontWeight: "bold" }}>
                    Cabin Type
                  </Col>
                  <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                    {data.cabinTypeName}
                  </Col>
                </Row>
              </>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Booking;
