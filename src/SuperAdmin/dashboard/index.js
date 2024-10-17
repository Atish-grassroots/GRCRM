import React, { useState } from "react";
import { Col, Row, Card, Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [processName, setProcessName] = useState("");
  const [serverIP, setServerIP] = useState("");
  const [server, setServer] = useState("");
  const [database, setDatabase] = useState("");
  const [processType, setProcessType] = useState("");
  const [agentGroup, setAgentGroup] = useState("");
  const [callFlow, setCallFlow] = useState("");
  const [callRecording, setCallRecording] = useState(false);
  const [wrapUpTime, setWrapUpTime] = useState(30);
  const [callHandlingTime, setCallHandlingTime] = useState(5);
  const [serviceLevel, setServiceLevel] = useState(80);
  const [queue, setQueue] = useState("");
  const [ivr, setIvr] = useState(false);
  const [dialer, setDialer] = useState(false);
  const [callDisposition, setCallDisposition] = useState([]);
  const [reporting, setReporting] = useState([]);
  const [security, setSecurity] = useState([]);
  const [integration, setIntegration] = useState([]);
  const [businessHours, setBusinessHours] = useState([]);
  const [holidaySchedule, setHolidaySchedule] = useState([]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveProcess = () => {
    // Save the process data to the database or API
    console.log("Process saved!");
    handleCloseModal();
  };

  const handleGetStarted = () => {
    navigate("/manager");
  };

  return (
    <div>
      <Button
        variant="secondary"
        style={{
          position: "fixed",
          top: "80px",
          right: "20px",
          zIndex: 1,
        }}
        onClick={handleShowModal}>
        Add Process
      </Button>
      <Row>
        <Col md="12">
          <Row className=" row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center">
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Body>
                  <Card.Title as="h1" className=" pricing-card-title">
                    India1<small className="text-muted fw-light"></small>
                  </Card.Title>
                  <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>Total : </p>
                    </li>
                    <li>
                      <p>Active Agents :</p>
                    </li>
                    <li>
                      <p>deactive Agents :</p>
                    </li>
                    <li>
                      <p>Active TL :</p>
                    </li>
                    <li>
                      <p>deactive TL :</p>
                    </li>
                    <li>
                      <p>Active Admin :</p>
                    </li>
                    <li>
                      <p>deactive Admin :</p>
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
                      className="btn btn-primary mx-2"
                      onClick={handleShowModal}>
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Body>
                  <Card.Title as="h1" className=" pricing-card-title">
                    MARS<small className="text-muted fw-light"></small>
                  </Card.Title>
                  <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>Total : </p>
                    </li>
                    <li>
                      <p>Active Agents :</p>
                    </li>
                    <li>
                      <p>deactive Agents :</p>
                    </li>
                    <li>
                      <p>Active TL :</p>
                    </li>
                    <li>
                      <p>deactive TL :</p>
                    </li>
                    <li>
                      <p>Active Admin :</p>
                    </li>
                    <li>
                      <p>deactive Admin :</p>
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
                      className="btn btn-primary mx-2"
                      onClick={handleShowModal}>
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Body>
                  <Card.Title as="h1" className=" pricing-card-title">
                    Amazon<small className="text-muted fw-light"></small>
                  </Card.Title>
                  <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>Total : </p>
                    </li>
                    <li>
                      <p>Active Agents :</p>
                    </li>
                    <li>
                      <p>deactive Agents :</p>
                    </li>
                    <li>
                      <p>Active TL :</p>
                    </li>
                    <li>
                      <p>deactive TL :</p>
                    </li>
                    <li>
                      <p>Active Admin :</p>
                    </li>
                    <li>
                      <p>deactive Admin :</p>
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
                      className="btn btn-primary mx-2"
                      onClick={handleShowModal}>
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Body>
                  <Card.Title as="h1" className=" pricing-card-title">
                    Pearson<small className="text-muted fw-light"></small>
                  </Card.Title>
                  <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>Total : </p>
                    </li>
                    <li>
                      <p>Active Agents :</p>
                    </li>
                    <li>
                      <p>deactive Agents :</p>
                    </li>
                    <li>
                      <p>Active TL :</p>
                    </li>
                    <li>
                      <p>deactive TL :</p>
                    </li>
                    <li>
                      <p>Active Admin :</p>
                    </li>
                    <li>
                      <p>deactive Admin :</p>
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
                      className="btn btn-primary mx-2"
                      onClick={handleShowModal}>
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Row className=" row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center">
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Body>
                  <Card.Title as="h1" className=" pricing-card-title">
                    India1<small className="text-muted fw-light"></small>
                  </Card.Title>
                  <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>Total : </p>
                    </li>
                    <li>
                      <p>Active Agents :</p>
                    </li>
                    <li>
                      <p>deactive Agents :</p>
                    </li>
                    <li>
                      <p>Active TL :</p>
                    </li>
                    <li>
                      <p>deactive TL :</p>
                    </li>
                    <li>
                      <p>Active Admin :</p>
                    </li>
                    <li>
                      <p>deactive Admin :</p>
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
                      className="btn btn-primary mx-2"
                      onClick={handleShowModal}>
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Body>
                  <Card.Title as="h1" className=" pricing-card-title">
                    MARS<small className="text-muted fw-light"></small>
                  </Card.Title>
                  <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>Total : </p>
                    </li>
                    <li>
                      <p>Active Agents :</p>
                    </li>
                    <li>
                      <p>deactive Agents :</p>
                    </li>
                    <li>
                      <p>Active TL :</p>
                    </li>
                    <li>
                      <p>deactive TL :</p>
                    </li>
                    <li>
                      <p>Active Admin :</p>
                    </li>
                    <li>
                      <p>deactive Admin :</p>
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
                      className="btn btn-primary mx-2"
                      onClick={handleShowModal}>
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Body>
                  <Card.Title as="h1" className=" pricing-card-title">
                    Amazon<small className="text-muted fw-light"></small>
                  </Card.Title>
                  <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>Total : </p>
                    </li>
                    <li>
                      <p>Active Agents :</p>
                    </li>
                    <li>
                      <p>deactive Agents :</p>
                    </li>
                    <li>
                      <p>Active TL :</p>
                    </li>
                    <li>
                      <p>deactive TL :</p>
                    </li>
                    <li>
                      <p>Active Admin :</p>
                    </li>
                    <li>
                      <p>deactive Admin :</p>
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
                      className="btn btn-primary mx-2"
                      onClick={handleShowModal}>
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Body>
                  <Card.Title as="h1" className=" pricing-card-title">
                    Pearson<small className="text-muted fw-light"></small>
                  </Card.Title>
                  <h4 className="my-0 fw-normal mt-3">Enterprise</h4>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>Total : </p>
                    </li>
                    <li>
                      <p>Active Agents :</p>
                    </li>
                    <li>
                      <p>deactive Agents :</p>
                    </li>
                    <li>
                      <p>Active TL :</p>
                    </li>
                    <li>
                      <p>deactive TL :</p>
                    </li>
                    <li>
                      <p>Active Admin :</p>
                    </li>
                    <li>
                      <p>deactive Admin :</p>
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
                      className="btn btn-primary mx-2"
                      onClick={handleShowModal}>
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
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
                    value={processName}
                    onChange={(e) => setProcessName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Server IP</Form.Label>
                  <Form.Control
                    type="text"
                    value={serverIP}
                    onChange={(e) => setServerIP(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Server</Form.Label>
                  <Form.Control
                    type="text"
                    value={server}
                    onChange={(e) => setServer(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Database</Form.Label>
                  <Form.Control
                    type="text"
                    value={database}
                    onChange={(e) => setDatabase(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Process Type</Form.Label>
                  <Form.Control
                    type="text"
                    value={processType}
                    onChange={(e) => setProcessType(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Agent Group</Form.Label>
                  <Form.Control
                    type="text"
                    value={agentGroup}
                    onChange={(e) => setAgentGroup(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Call Flow</Form.Label>
                  <Form.Control
                    type="text"
                    value={callFlow}
                    onChange={(e) => setCallFlow(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Queue</Form.Label>
                  <Form.Control
                    type="text"
                    checked={queue}
                    onChange={(e) => setQueue(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Wrap-up Time (seconds)</Form.Label>
                  <Form.Control
                    type="number"
                    value={wrapUpTime}
                    onChange={(e) => setWrapUpTime(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Call Handling Time (minutes)</Form.Label>
                  <Form.Control
                    type="number"
                    value={callHandlingTime}
                    onChange={(e) => setCallHandlingTime(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Service Level (%)</Form.Label>
                  <Form.Control
                    type="number"
                    value={serviceLevel}
                    onChange={(e) => setServiceLevel(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Holiday Schedule</Form.Label>
                  <Form.Control
                    type="text"
                    value={holidaySchedule.join(", ")}
                    onChange={(e) =>
                      setHolidaySchedule(e.target.value.split(", "))
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Business Hours</Form.Label>
                  <Form.Control
                    type="text"
                    value={businessHours.join(", ")}
                    onChange={(e) =>
                      setBusinessHours(e.target.value.split(", "))
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Call Type</Form.Label>
                  <Form.Control
                    type="text"
                    checked={dialer}
                    onChange={(e) => setDialer(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Call Disposition</Form.Label>
                  <Form.Control
                    type="text"
                    value={callDisposition.join(", ")}
                    onChange={(e) =>
                      setCallDisposition(e.target.value.split(", "))
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Reporting</Form.Label>
                  <Form.Control
                    type="text"
                    value={reporting.join(", ")}
                    onChange={(e) => setReporting(e.target.value.split(", "))}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Security</Form.Label>
                  <Form.Control
                    type="text"
                    value={security.join(", ")}
                    onChange={(e) => setSecurity(e.target.value.split(", "))}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Integration</Form.Label>
                  <Form.Control
                    type="text"
                    value={integration.join(", ")}
                    onChange={(e) => setIntegration(e.target.value.split(", "))}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="m-2">
              <Col md={4}>
                <Form.Check>
                  <Form.Check.Label>IVR</Form.Check.Label>
                  <Form.Check.Input
                    type="checkbox"
                    checked={ivr}
                    onChange={(e) => setIvr(e.target.checked)}
                  />
                </Form.Check>
              </Col>
              <Col md={4}>
                <Form.Check>
                  <Form.Check.Label>Call Recording</Form.Check.Label>
                  <Form.Check.Input
                    type="checkbox"
                    checked={callRecording}
                    onChange={(e) => setCallRecording(e.target.checked)}
                  />
                </Form.Check>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveProcess}>
            Save Process
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Index;
