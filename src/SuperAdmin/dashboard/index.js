import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useSuperAdminApis from "../hook";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [processlist, setAllProcess] = useState([]);
  const [update, setUpdate] = useState(false);
  const [{ addProcessDetails, updateProcessDetails, getProcessDetails }] = useSuperAdminApis();

  const [processDetails, setProcessDetails] = useState({
    processName: "",
    database: "",
    dbServer: "",
    pLogo: {},
    pContactName: "",
    pContactEmail: "",
    pStartDate: new Date(),
    pEndDate: new Date(),
    pStatus: "",
    elasticServer: "",
    phone: "",
    pAddress: "",
    pCity: "",
    pincode: "",
    pState: "",
    country: "",
  });
  
  const handleShowModal = () => {
    setUpdate(false);
    setShowModal(true);
  };

  const [processID, setProcessID] = useState(null);
  const handleShowUpdateModal = async (pName) => {
    setShowModal(true);
    setUpdate(true);

    // const response = await getProcessDetails(pName);
    getProcessDetails(pName)
      .then((processDetail) => {
        setProcessID(processDetail?.data?.message[0]?._id);
        setProcessDetails({
          processName: processDetail?.data?.message[0]?.ProcessName,
          database: processDetail?.data?.message[0]?.ProcessDbName,
          dbServer: processDetail?.data?.message[0]?.DBServer,
          pLogo: processDetail?.data?.message[0]?.ProcessLogo,
          pContactName: processDetail?.data?.message[0]?.ProcessContactName,
          pContactEmail: processDetail?.data?.message[0]?.ProcessContactEmail,
          pStartDate: new Date(
            processDetail?.data?.message[0]?.ProcessStartDate
          ),
          pEndDate: new Date(processDetail?.data?.message[0]?.ProcessEndDate),
          pStatus: processDetail?.data?.message[0]?.ProcessStatus,
          elasticServer: processDetail?.data?.message[0]?.ElasticServer,
          phone: processDetail?.data?.message[0]?.Phone,
          pAddress: processDetail?.data?.message[0]?.ProcessAddress,
          pCity: processDetail?.data?.message[0]?.City,
          pincode: processDetail?.data?.message[0]?.Pincode,
          pState: processDetail?.data?.message[0]?.State,
          country: processDetail?.data?.message[0]?.Country,
        });
      })
      .catch((error) => {
        console.error("Error fetching process details:", error);
      });
  };
  const handleCloseModal = () => {
    setProcessDetails([]);
    setUpdate(false);
    getAllProcessDetails();
    setShowModal(false);
  };

  const handleGetStarted = () => {
    navigate("/manager");
  };

  const handleAddProcess = async () => {
    const data = {
      ProcessName: processDetails.processName,
      ProcessDbName: processDetails.database,
      DBServer: processDetails.dbServer,
      ProcessLogo: processDetails.pLogo,
      ProcessContactName: processDetails.pContactName,
      ProcessContactEmail: processDetails.pContactEmail,
      ProcessStartDate: processDetails.pStartDate,
      ProcessEndDate: processDetails.pEndDate,
      ProcessStatus: processDetails.pStatus,
      ElasticServer: processDetails.elasticServer,
      Phone: processDetails.phone,
      ProcessAddress: processDetails.pAddress,
      City: processDetails.pCity,
      Pincode: processDetails.pincode,
      State: processDetails.pState,
      Country: processDetails.country,
    };

    try {
      const response = await addProcessDetails(data);
      if (response) {
        setProcessDetails(response.data);
        toast.success("Process added successfully!");
        handleCloseModal();
        getAllProcessDetails();
        setProcessDetails([]);
      } else {
        console.log("Error adding process:", response.message);
        toast.error("Error adding process!");
      }
    } catch (error) {
      console.log("Error adding process:", error.message);
      toast.error("Error adding process!");
    }
  };

  const handleUpdateProcess = async () => {
    const data = {
      ProcessID: processID,
      ProcessDbName: processDetails.database,
      DBServer: processDetails.dbServer,
      ProcessLogo: processDetails.pLogo,
      ProcessContactName: processDetails.pContactName,
      ProcessContactEmail: processDetails.pContactEmail,
      ProcessStartDate: processDetails.pStartDate,
      ProcessEndDate: processDetails.pEndDate,
      ProcessStatus: processDetails.pStatus,
      ElasticServer: processDetails.elasticServer,
      Phone: processDetails.phone,
      ProcessAddress: processDetails.pAddress,
      City: processDetails.pCity,
      Pincode: processDetails.pincode,
      State: processDetails.pState,
      Country: processDetails.country,
    };

    try {
      const response = await updateProcessDetails(data);
      if (response) {
        setProcessDetails(response.data);
        toast.success("Process Update successfully!");
        handleCloseModal();
        getAllProcessDetails();
        setProcessDetails([]);
      } else {
        console.log("Error updating process:", response.message);
        toast.error("Error updating process!");
      }
    } catch (error) {
      console.log("Error updating process:", error.message);
      toast.error("Error updating process!");
    }
  };

  const getAllProcessDetails = async () => {
    try {
      const response = await getProcessDetails();
      if (response) {
        setAllProcess(response.data.message);
      } else {
        console.log("Error fetching process details:", response.message);
      }
    } catch (error) {
      console.log("Error fetching process details:", error.message);
    }
  };

  useEffect(() => {
    getAllProcessDetails();
  }, []);

  return (
    <div>
      <ToastContainer />
      <button
        type="button"
        // size="xl"
        className="btn btn-xl btn-icon btn-warning m-2"
        style={{
          position: "fixed",
          top: "80px",
          right: "20px",
          zIndex: 1,
        }}
        onClick={handleShowModal}>
        Add Process
      </button>
      <Row>
        <Col md="12">
          <Row className=" row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center">
            {processlist.map((process) => (
              <Col>
                <Card className=" mb-4 rounded-3 ">
                  <Card.Body>
                    <Card.Title as="h1" className=" pricing-card-title">
                      {process.ProcessName}
                      <small className="text-muted fw-light"></small>
                    </Card.Title>
                    <ul className="list-unstyled my-3 p-0">
                      <li>
                        <p> {process.ProcessDbName}</p>
                      </li>
                      <li>
                        <p>{process.DBServer}</p>
                      </li>
                      <li>
                        <p>{process.ProcessContactName}</p>
                      </li>
                      <li>
                        <p>{process.ProcessContactEmail}</p>
                      </li>
                      <li>
                        <p>{process.ElasticServer}</p>
                      </li>
                      <li>
                        <p>{process.Phone}</p>
                      </li>
                      <li>
                        <p>{process.ProcessStatus}</p>
                      </li>
                    </ul>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleGetStarted}>
                        Get Started
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-warning m-2"
                        onClick={() => {
                          handleShowUpdateModal(process.ProcessName);
                        }}>
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                          <path
                            d="M15.1655 4.60254L19.7315 9.16854"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                        </svg>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Add New Process</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.processName}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        processName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Database</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.database}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        database: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Database Server</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.dbServer}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        dbServer: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process Logo</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setProcessDetails({
                          ...processDetails,
                          pLogo: file,
                        });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.pContactName}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pContactName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process Contact Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.pContactEmail}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pContactEmail: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={processDetails.pStartDate}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pStartDate: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process End Date</Form.Label>
                  <Form.Control
                    type="date"
                    checked={processDetails.pEndDate}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pEndDate: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process Status</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.pStatus}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pStatus: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Elastic Server</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.elasticServer}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        elasticServer: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.phone}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        phone: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.pAddress}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pAddress: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.pCity}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pCity: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    type="text"
                    checked={processDetails.pincode}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pincode: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.pState}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        pState: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    value={processDetails.country}
                    onChange={(e) =>
                      setProcessDetails({
                        ...processDetails,
                        country: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          {update ? (
            <Button variant="primary" onClick={handleUpdateProcess}>
              Update Process
            </Button>
          ) : (
            <Button variant="primary" onClick={handleAddProcess}>
              Save Process
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Index;
