import React, { useEffect, useState } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import auth1 from "../assets/images/auth/01.png";
import useSignInHook from "./hooks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [{ getProcessName, userLogin, validateOTP }] = useSignInHook();
  const [process, setProcess] = useState([]);
  const [otp, setOtp] = useState(false);
  const [loginResponse, setLoginResponse] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    ProcessName: "",
    Email: "",
    Password: "",
    Otp: "",
  });


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

  const handleAddLoginDetails = async () => {
    const data = {
      ProcessName: loginDetails.ProcessName,
      Email: loginDetails.Email,
      Password: loginDetails.Password,
    };

    try {
      const response = await userLogin(data);
      if (response) {
        setLoginResponse(response.data);
        toast.success(response.data.message);
        setOtp(true);
        // navigate("/superadmin");
      } else {
        console.log("Error in generating OTP:", response.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error in  generating OTP:", error.message);
      toast.error("Error in generating OTP!");
    }
  };

  const handleSubmitOtp = async () => {
    console.log("loginDetails::", loginDetails);
    const data = {
      ProcessName: loginResponse.processName,
      Email: loginResponse.email,
      Otp: loginDetails.Otp,
    };

    try {
      const response = await validateOTP(data);
      if (response) {
        setLoginDetails(response.data);
        toast.success("OTP Validated Successfully!");
        setOtp(false);
        navigate("/superadmin");
      } else {
        console.log("Error validating OTP:", response.error	);
        toast.error(response.error);
      }
    } catch (error) {
      console.log("Error in  validating OTP:", error.error	);
      toast.error("Incorrect OTP!");
    }
  };

  useEffect(() => {
    getProcessList();
  }, []);

  return (
    <>
      <ToastContainer />
      {!otp && (
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
                                value={loginDetails.ProcessName}
                                onChange={(e) =>
                                  setLoginDetails({
                                    ...loginDetails,
                                    ProcessName: e.target.value,
                                  })
                                }>
                                <option value="">Select a process</option>
                                <option value="superadmin">Super Admin</option>
                                {process.map((item) => (
                                  <option
                                    key={item._id}
                                    value={item.ProcessName}>
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
                                value={loginDetails.Email}
                                onChange={(e) =>
                                  setLoginDetails({
                                    ...loginDetails,
                                    Email: e.target.value,
                                  })
                                }
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
                                value={loginDetails.Password}
                                onChange={(e) =>
                                  setLoginDetails({
                                    ...loginDetails,
                                    Password: e.target.value,
                                  })
                                }
                              />
                            </Form.Group>
                          </Col>
                          <Col
                            lg="12"
                            className="d-flex justify-content-between">
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
                            onClick={handleAddLoginDetails}
                            type="button"
                            variant="btn btn-primary">
                            Generate OTP
                          </Button>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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
      )}
      {otp && (
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
                              <Form.Label htmlFor="otp" className="">
                                Enter OTP
                              </Form.Label>
                              <Form.Control
                                type="text"
                                className=""
                                id="otp"
                                value={loginDetails.Otp}
                                onChange={(e) =>
                                  setLoginDetails({
                                    ...loginDetails,
                                    Otp: e.target.value,
                                  })
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                          <Button
                            onClick={handleSubmitOtp}
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
      )}
    </>
  );
};

export default SignIn;
