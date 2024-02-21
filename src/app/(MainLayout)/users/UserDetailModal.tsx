import { IAgent } from "@/services/users";
import moment from "moment";
import React, { useState } from "react";
import { Form, ToggleButton } from "react-bootstrap";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ButtonToggle,
} from "reactstrap";

type UserDetailModalProps = {
  userData: IAgent;
  modalOpen: boolean;
  toggleModal: () => void;
};

interface SwitchState {
  [key: string]: boolean;
}

const UserDetailModal = ({
  userData,
  modalOpen,
  toggleModal,
}: UserDetailModalProps) => {
  const [switches, setSwitches] = useState<SwitchState>({
    "custom-switch-1": false,
    "custom-switch-2": false,
    "custom-switch-3": false,
    "custom-switch-4": false,
    "custom-switch-5": false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setSwitches((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <Modal isOpen={modalOpen} toggle={toggleModal} centered size="lg">
      <ModalHeader toggle={toggleModal}>
        <h4>Agent Data</h4>
      </ModalHeader>
      <ModalBody className="row mb-3">
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>ID</label>
            <span>{userData.id}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Email</label>
            <span>{userData.email}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Landline</label>
            <span>{userData.landline || "N/A"}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Mobile</label>
            <span>{userData.mobile}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Country</label>
            <span>{userData.country || "N/A"}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>City</label>
            <span>{userData.city || "N/A"}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Travel Agent ID</label>
            <span>{userData.travelAgentId}</span>
          </div>
        </div>
        {/* <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Logo</label>
            <span>{userData.logo}</span>
          </div>
        </div> */}
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Representative Name</label>
            <span>{userData.representativeName}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Company Name</label>
            <span>{userData.companyName || "N/A"}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Akama</label>
            <span>{userData.akama}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Status</label>
            <span>{userData.status}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Credit Limit</label>
            <span>{userData.creditLimit || "N/A"}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Service Charges</label>
            <span>{userData.serviceCharges || "N/A"}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Service Charges Type</label>
            <span>{userData.serviceChargesType || "N/A"}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Wallet</label>
            <span>{userData.wallet}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Admin ID</label>
            <span>{userData.admin_id || "N/A"}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Created At</label>
            <span>{moment(userData.createdAt).format("LLL")}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label>Updated At</label>
            <span>{moment(userData.updatedAt).format("LLL")}</span>
          </div>
        </div>
        {/* {userData.AgentDocuments && (
          <div>
            <label>Agent Documents</label>
            <ul>
              {userData.AgentDocuments.map((doc, index) => (
                <li key={index}>{doc.name}</li>
              ))}
            </ul>
          </div>
        )} */}
        <hr />
        <h4>Permissions</h4>
        <div className="col-md-6 row ">
          <Form.Label className="col-md-10">
            Create and manage bookings
          </Form.Label>
          <Form.Check
            className="col-md-2"
            type="switch"
            id="custom-switch-1"
            checked={switches["custom-switch-1"]}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 row ">
          <Form.Label className="col-md-10">
            Access training resources
          </Form.Label>
          <Form.Check
            className="col-md-2"
            type="switch"
            id="custom-switch-2"
            checked={switches["custom-switch-2"]}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 row ">
          <Form.Label className="col-md-10">
            Modify or cancel bookings
          </Form.Label>
          <Form.Check
            className="col-md-2"
            type="switch"
            id="custom-switch-3"
            checked={switches["custom-switch-3"]}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 row ">
          <Form.Label className="col-md-10">
            Generate and send invoices
          </Form.Label>
          <Form.Check
            className="col-md-2"
            type="switch"
            id="custom-switch-4"
            checked={switches["custom-switch-4"]}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 row ">
          <Form.Label className="col-md-10">
            Process payments and refunds
          </Form.Label>
          <Form.Check
            className="col-md-2"
            type="switch"
            id="custom-switch-5"
            checked={switches["custom-switch-5"]}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 row ">
          <Form.Label className="col-md-10">
            Access reporting and analytics
          </Form.Label>
          <Form.Check
            className="col-md-2"
            type="switch"
            id="custom-switch-6"
            checked={switches["custom-switch-6"]}
            onChange={handleChange}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggleModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserDetailModal;
