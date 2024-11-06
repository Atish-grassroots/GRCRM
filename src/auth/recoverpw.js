import React, { useEffect, useState } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import auth2 from "../assets/images/auth/02.png";
import useSignInHook from "./hooks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recoverpw = () => {
  let navigate = useNavigate();
  const [
    { getProcessName, forgetOtpVerifaction, recoverPwdOtp, forgetPassword },
  ] = useSignInHook();
  const [process, setProcess] = useState([]);
  const [otp, setOtp] = useState(false);
  const [restDetails, setResetDetails] = useState({
    ProcessName: "",
    Email: "",
    Password: "",
    Otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [password, setPassword] = useState(false);

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

  const getOtp = async () => {
    const data = {
      ProcessName: restDetails.ProcessName,
      Email: restDetails.Email,
    };
    try {
      const response = await recoverPwdOtp(data);
      if (response) {
        setOtp(true);
        toast.success("Otp generated Successfully");
        console.log(response.data.message);
      } else {
        console.log("Error fetching process details:", response.message);
      }
    } catch (error) {
      toast.error("Failed to Generate OTP");
      console.log("Failed to Generate OTP:", error.message);
    }
  };

  const validateOTP = async () => {
    const data = {
      ProcessName: restDetails.ProcessName,
      Email: restDetails.Email,
      Otp: restDetails.Otp,
    };
    try {
      const response = await forgetOtpVerifaction(data);
      if (response) {
        setPassword(true);
        toast.success("OTP Validated");
        console.log(response.data.message);
      } else {
        toast.error("Invalid OTP");
        console.log("Error fetching process details:", response.message);
      }
    } catch (error) {
      toast.error("Invalid OTP");
      console.log("Error fetching process details:", error.message);
    }
  };

  const ResetPassword = async () => {
    const data = {
      ProcessName: restDetails.ProcessName,
      Email: restDetails.Email,
      NewPassword: restDetails.newPassword,
      confirmPassword: restDetails.confirmPassword,
    };
    try {
      const response = await forgetPassword(data);
      if (response) {
        toast.success("Password Updated Succesfully");
        setPassword(false);
        navigate(`/`);
        console.log(response.data.message);
      } else {
        toast.error("Error updating password");
        console.log("Error updating password:", response.message);
      }
    } catch (error) {
      toast.error("Error updating password");
      console.log("Error updating password:", error.message);
    }
  };

  useEffect(() => {
    getProcessList();
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
            <Image
              src={auth2}
              className="img-fluid gradient-main animated-scaleX"
              alt="images"
            />
          </Col>
          <Col md="6" className="p-0">
            <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
              <Card.Body>
                <div className="d-flex justify-content-center mb-3">
                  <img
                    className="navbar-brand"
                    src="../GrLogo.png"
                    alt=""
                    style={{ width: "250px" }}
                  />
                </div>
                <h2 className="mb-2 text-center">Reset Password</h2>
                <p>
                  Enter your Process, email address, and we'll send you an OTP
                  to verify your identity and reset your password.
                </p>
                {password ? (
                  <Form>
                    <Row>
                      <Col lg="12" className="col-lg-12">
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="pname" className="">
                            Process Name
                          </Form.Label>
                          <select
                            className="form-select"
                            data-trigger
                            name="choices-single-default"
                            id="choices-single-default"
                            value={restDetails.ProcessName}
                            onChange={(e) =>
                              setResetDetails({
                                ...restDetails,
                                ProcessName: e.target.value,
                              })
                            }>
                            <option value="">Select a process</option>
                            <option value="superadmin">Super Admin</option>
                            {process.map((item) => (
                              <option key={item._id} value={item.ProcessName}>
                                {item.ProcessName}
                              </option>
                            ))}
                          </select>
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="col-lg-12">
                        <Form.Group className="floating-label">
                          <Form.Label htmlFor="email" className="form-label">
                            Email
                          </Form.Label>
                          <Form.Control
                            value={restDetails.Email}
                            onChange={(e) =>
                              setResetDetails({
                                ...restDetails,
                                Email: e.target.value,
                              })
                            }
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="email"
                            placeholder=" "
                          />
                        </Form.Group>
                      </Col>

                      <Col lg="12" className="col-lg-12 mt-2">
                        <Form.Group className="floating-label">
                          <Form.Label htmlFor="Otp" className="form-label">
                            New Password
                          </Form.Label>
                          <Form.Control
                            value={restDetails.newPassword}
                            onChange={(e) =>
                              setResetDetails({
                                ...restDetails,
                                newPassword: e.target.value,
                              })
                            }
                            type="text"
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="col-lg-12 mt-2">
                        <Form.Group className="floating-label">
                          <Form.Label htmlFor="Otp" className="form-label">
                            Confirm Password
                          </Form.Label>
                          <Form.Control
                            value={restDetails.confirmPassword}
                            onChange={(e) =>
                              setResetDetails({
                                ...restDetails,
                                confirmPassword: e.target.value,
                              })
                            }
                            type="text"
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6" className="d-flex justify-content-start">
                        <Button
                          onClick={ResetPassword}
                          className="mt-3"
                          type="button"
                          variant="primary">
                          Reset Password
                        </Button>
                      </Col>
                      <Col md="6" className="d-flex justify-content-end">
                        <Button
                          onClick={() => navigate("/")}
                          className="mt-3"
                          type="button"
                          variant="primary">
                          Sign In
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                ) : (
                  <Form>
                    <Row>
                      <Col lg="12" className="col-lg-12">
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="pname" className="">
                            Process Name
                          </Form.Label>
                          <select
                            className="form-select"
                            data-trigger
                            name="choices-single-default"
                            id="choices-single-default"
                            value={restDetails.ProcessName}
                            onChange={(e) =>
                              setResetDetails({
                                ...restDetails,
                                ProcessName: e.target.value,
                              })
                            }>
                            <option value="">Select a process</option>
                            <option value="superadmin">Super Admin</option>
                            {process.map((item) => (
                              <option key={item._id} value={item.ProcessName}>
                                {item.ProcessName}
                              </option>
                            ))}
                          </select>
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="col-lg-12">
                        <Form.Group className="floating-label">
                          <Form.Label htmlFor="email" className="form-label">
                            Email
                          </Form.Label>
                          <Form.Control
                            value={restDetails.Email}
                            onChange={(e) =>
                              setResetDetails({
                                ...restDetails,
                                Email: e.target.value,
                              })
                            }
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="email"
                            placeholder=" "
                          />
                        </Form.Group>
                      </Col>
                      {otp && (
                        <Col lg="12" className="col-lg-12 mt-2">
                          <Form.Group className="floating-label">
                            <Form.Label htmlFor="Otp" className="form-label">
                              Enter OTP
                            </Form.Label>
                            <Form.Control
                              value={restDetails.Otp}
                              onChange={(e) =>
                                setResetDetails({
                                  ...restDetails,
                                  Otp: e.target.value,
                                })
                              }
                              type="text"
                              className="form-control"
                            />
                          </Form.Group>
                        </Col>
                      )}
                    </Row>
                    <Row>
                      <Col md="6" className="d-flex justify-content-start">
                        {otp ? (
                          <Button
                            onClick={validateOTP}
                            className="mt-3"
                            type="button"
                            variant="primary">
                            Validate
                          </Button>
                        ) : (
                          <Button
                            onClick={getOtp}
                            className="mt-3"
                            type="button"
                            variant="primary">
                            Get OTP
                          </Button>
                        )}
                      </Col>
                      <Col md="6" className="d-flex justify-content-end">
                        <Button
                          onClick={() => navigate("/")}
                          className="mt-3"
                          type="button"
                          variant="primary">
                          Sign In
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Card.Body>
            </Card>
            <div className="sign-bg sign-bg-right">
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
        </Row>
      </section>
    </>
  );
};

export default Recoverpw;
