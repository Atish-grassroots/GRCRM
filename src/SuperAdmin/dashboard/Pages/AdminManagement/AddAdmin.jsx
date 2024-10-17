import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const AddAdmin = () => {
  return (
    <>
      {" "}
      <Card>
        <Card.Header className="pb-3">
          <div className="d-flex justify-content-between">
            <h5 className="mb-0">Manage Admin</h5>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <Row>
            <Col sm="12">
              <Card>
                <Card.Body>
                  <Form className="p-2">
                    <div
                      className="p-field-container"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}>
                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="exampleInputEmail3">
                            Employee ID
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="text"
                            placeholder="Enter Employee ID"
                          />
                        </Form.Group>
                      </div>

                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="exampleInputText1">
                            User Name{" "}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="userName"
                            placeholder="Enter Name"
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      className="p-field-container"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}>
                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="exampleInputText1">
                            Alias Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="alias"
                            placeholder="Enter Name"
                          />
                        </Form.Group>
                      </div>

                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="exampleInputEmail3">
                            Email{" "}
                          </Form.Label>
                          <Form.Control
                            type="email"
                            id="Email"
                            placeholder="Enter Email"
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      className="p-field-container"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}>
                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label> Select Role</Form.Label>
                          <select className="form-select form-select mb-3 shadow-none">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Form.Group>
                      </div>

                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label> Call Type</Form.Label>
                          <select className="form-select form-select mb-3 shadow-none">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      className="p-field-container"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}>
                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label>Sub Call Type</Form.Label>
                          <select className="form-select form-select mb-3 shadow-none">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Form.Group>
                      </div>

                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label> Common Language</Form.Label>
                          <select className="form-select form-select mb-3 shadow-none">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      className="p-field-container"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}>
                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label>Country</Form.Label>
                          <select className="form-select form-select mb-3 shadow-none">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Form.Group>
                      </div>

                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label>State</Form.Label>
                          <select className="form-select form-select mb-3 shadow-none">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      className="p-field-container"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}>
                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label>City</Form.Label>
                          <select className="form-select form-select mb-3 shadow-none">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Form.Group>
                      </div>

                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label>Zip Code</Form.Label>
                          <Form.Control
                            type="text"
                            id="zipCode"
                            placeholder="Enter Zip Code"
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      className="p-field-container"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}>
                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            id="phoneNumber"
                            placeholder="Enter Phone Number"
                          />
                        </Form.Group>
                      </div>

                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label>Extension</Form.Label>
                          <Form.Control
                            type="text"
                            id="extension"
                            placeholder="Enter Extension"
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      className="p-field-container"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}>
                      <div className="p-field" style={{ flex: "1 1 45%" }}>
                        <Form.Group className="form-group">
                          <Form.Label>Comments</Form.Label>
                          <Form.Control
                            as="textarea"
                            id="comments"
                            placeholder="Enter Comments"
                          />
                        </Form.Group>
                      </div>

                      <div
                        className="p-field"
                        style={{ flex: "1 1 45%" }}></div>
                    </div>

                    <Button type="submit" className="btn btn-primary btn-block">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddAdmin;
