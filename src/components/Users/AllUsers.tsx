"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import { GetAgentByAgentId, IAgent } from "@/services/users";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";

type AllUserTableProps = { agents: IAgent[] | undefined };

const AllUsersTable = ({ agents }: AllUserTableProps) => {
  const [agentId, setAgentId] = useState<number>();
  const [agentIdModal, setAgentIdModal] = useState<IAgent>();
  const [show, setShow] = useState(false);

  // Get AGENT BY AGENT ID
  useEffect(() => {
    if (agentId) {
      const fetchData = () => {
        GetAgentByAgentId(agentId)
          .then((res) => {
            if (res) setAgentIdModal(res);
          })
          .catch((error) => console.error("Error fetching Agent data:", error));
      };
      fetchData();
    }
  }, [agentId]);

  const handleShow = (id: number) => {
    if (id !== null) {
      setShow(true);
    }
    setAgentId(id);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <table className="user-table table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Wallet</th>
            <th>Created</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {agents &&
            agents.map((data: IAgent, index: number) => (
              <tr key={index}>
                <td>
                  <a>
                    <span className="d-block ">{data.id}</span>
                  </a>
                </td>
                <td>
                  <span className="">{data.representativeName} </span>
                </td>
                <td>
                  <span className="">{data.email} </span>
                </td>
                <td>
                  <span className="">{data.mobile} </span>
                </td>
                <td>
                  <span className="">{data.country} </span>
                </td>
                <td align="left">
                  <span className="">SAR {data.wallet} </span>
                </td>
                <td align="left">{moment(data.createdAt).format("LL")}</td>
                <td>
                  <a
                    onClick={() => data.admin_id && handleShow(data?.admin_id)}
                    style={{ cursor: "pointer", fontSize: "20px" }}
                  >
                    <i className="fa fa-eye" />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center", width: "100%" }}>
            Agent Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row style={{ paddingTop: "10px" }}>
              <Col sm={6} style={{ fontWeight: "bold" }}>
                Agent ID
              </Col>
              <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}>
                {agentIdModal?.id}
              </Col>
            </Row>
            <Row style={{ paddingTop: "10px" }}>
              <Col sm={6} style={{ fontWeight: "bold" }}>
                Travellers Detail :
              </Col>
              <Col sm={6} style={{ color: "#4aa4d9", fontWeight: 600 }}></Col>
            </Row>

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
                      {agentIdModal?.flights[0]?.fromAirportCode}
                    </h4>
                  </div>
                </div>
                <div className="w-50">
                  <hr />
                </div>
                <div className="d-flex align-items-center justify-content-center gap-3 w-25">
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <h4 className="m-0">
                      {agentIdModal?.flights[0]?.toAirportCode}{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {agentIdModal?.flights.map((data: any) => (
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
      </Modal> */}
    </>
  );
};

export default AllUsersTable;
