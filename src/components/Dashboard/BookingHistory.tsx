import {
  bookingHistoryTableData,
  flightLand,
  bookingHistoryData,
  bookingDetailData,
} from "@/data/Dashboard";
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
import { GetALLAgentBookings } from "@/services/dashboard";

const BookingHistory = () => {
  const [bookingData, setBookingData] = useState<any>([]); // Add proper type here
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = () => {
      GetALLAgentBookings()
        .then((res) => setBookingData(res))
        .catch((error) => console.error("Error fetching booking data:", error));
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="col-xxl-8">
        <div className="card ">
          <div className="card-header">
            <div className="card-header-title">
              <h5>Booking History</h5>
            </div>
          </div>
          <div className="card-body overflow-auto" style={{ height: "372px" }}>
            <div className="table-responsive ">
              <table className=" dashboard-table table border-0 ">
                <tbody>
                  {bookingHistoryData.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <span className="fw-bolder">{data.airline}</span>
                        <p className="subtitle">{data.flight_no}</p>
                      </td>
                      <td>
                        <span className="fw-bolder">{data.origin}</span>
                      </td>
                      <td>{/* <span>{data.origin}</span> */}</td>
                      <td>
                        <span>
                          {" "}
                          {flightTakeOff()} {data.depart_date_time}
                        </span>
                      </td>
                      <td>
                        <span />
                      </td>
                      <td>
                        <span>
                          {flightLand()}
                          {data.arrival_date_time}
                        </span>
                      </td>
                      <td>
                        <span className="fw-bolder text-black">
                          {data.destination}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`text-white badge badge-${
                            data.status === "Active" ? "primary" : "secondary"
                          }`}
                        >
                          {data.status}
                        </span>
                      </td>
                      <td>
                        <Button
                          variant="primary"
                          style={{
                            padding: "5px !important",
                            fontSize: "11px !important",
                            fontWeight: 600,
                          }}
                          onClick={handleShow}
                        >
                          Booking Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center", width: "100%" }}>
            Booking Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bookingDetailData.map((value, index) => (
            <Container key={index}>
              <Row style={{ paddingTop: "10px" }}>
                <Col sm={6} style={{ fontWeight: "bold" }}>
                  Booking ID
                </Col>
                <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                  {value.data.bookingId}
                </Col>
              </Row>
              {value.data.travelers.map((value) => (
                <>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Name
                    </Col>
                    <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                      {value.givenName}
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
                </>
              ))}
              {value.data.flights.map((data) => (
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
                      Departure Time
                    </Col>
                    <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                      {data.departureTime}
                    </Col>
                  </Row>
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Arrival Time
                    </Col>
                    <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
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
                  <Row style={{ paddingTop: "10px" }}>
                    <Col sm={6} style={{ fontWeight: "bold" }}>
                      Duration
                    </Col>
                    <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                      {data.durationInMinutes}
                    </Col>
                  </Row>
                </>
              ))}
            </Container>
          ))}
        </Modal.Body>
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
