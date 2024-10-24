import React, { useEffect, useState } from "react";
import { Row, Col, Image, Form, Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";

// img
import auth1 from "../assets/images/auth/01.png";
import useSuperAdminApis from "../SuperAdmin/hook";

const SignIn = () => {
  const navigate = useNavigate();
  const [{ getProcessName }] = useSuperAdminApis();
  const [process, setProcess] = useState([]);

  const getProcessList = async () => {
    try {
      const response = await getProcessName();
      if (response) {
        setProcess(response.data.message);
      } else {
        console.log("Error fetching process details:", response.message);
      }
    } catch (error) {
      console.log("Error fetching process details:", error.message);
    }
  };

  useEffect(() => {
    getProcessList();
  }, []);

  const [selectedProcessName, setSelectedProcessName] = useState("");

  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                  <Card.Body>
                    <div className="d-flex justify-content-center mb-3">
                      <img
                        className="navbar-brand"
                        src="../GrLogo.png"
                        alt=""
                        style={{ width: "250px" }}
                      />
                    </div>
                    <h2 className="mb-2 text-center">Sign In</h2>
                    <p className="text-center">Login to stay connected.</p>
                    <Form>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="pname" className="">
                              Process Name
                            </Form.Label>
                            <select
                              className="form-select"
                              data-trigger
                              name="choices-single-default"
                              id="choices-single-default"
                              onChange={(e) =>
                                setSelectedProcessName(e.target.value)
                              }>
                              <option value="">Select a process</option>
                              {process.map((item) => (
                                <option key={item._id} value={item.ProcessName}>
                                  {item.ProcessName}
                                </option>
                              ))}
                            </select>
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className=""
                              id="email"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              id="password"
                              aria-describedby="password"
                              placeholder=" "
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="d-flex justify-content-between">
                          <Form.Check className="form-check mb-3">
                            <Form.Check.Input
                              type="checkbox"
                              id="customCheck1"
                            />
                            <Form.Check.Label htmlFor="customCheck1">
                              Remember Me
                            </Form.Check.Label>
                          </Form.Check>
                          <Link to="/auth/recoverpw">Forgot Password?</Link>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button
                          onClick={() => navigate("/superadmin")}
                          type="button"
                          variant="btn btn-primary">
                          Sign In
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="sign-bg">
              <svg
                width="280"
                height="230"
                viewBox="0 0 431 398"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.05">
                  <rect
                    x="-157.085"
                    y="193.773"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 -157.085 193.773)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="7.46875"
                    y="358.327"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 7.46875 358.327)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="61.9355"
                    y="138.545"
                    width="310.286"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 61.9355 138.545)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="62.3154"
                    y="-190.173"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 62.3154 -190.173)"
                    fill="#3B8AFF"
                  />
                </g>
              </svg>
            </div>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
            <Image
              src={auth1}
              className="Image-fluid gradient-main animated-scaleX"
              alt="images"
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignIn;
