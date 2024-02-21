import React, { useEffect, useState } from "react";
import { ImagePath } from "@/utils/Constant";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

interface IBookingHistoryModalProps {
  show: boolean;
  handleClose: () => void;
  bookingIDModal: any;
}

const BookingHistoryModal = ({
  show,
  handleClose,
  bookingIDModal,
}: IBookingHistoryModalProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (bookingIDModal) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [bookingIDModal]);
  return (
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
      {!loading && bookingIDModal ? (
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

            {bookingIDModal?.travelers.map((value: any, i: number) => (
              <div
                key={i}
                className="container"
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
            {bookingIDModal?.flights.map((data: any, i: number) => (
              <div key={i}>
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
              </div>
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
  );
};

export default BookingHistoryModal;
