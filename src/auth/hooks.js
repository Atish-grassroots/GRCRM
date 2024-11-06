import relayService from "../router/Axios/hook";

const useSignInHook = () => {
  const userLogin = async (data) => {
    try {
      const response = await relayService({
        url: `/Users/login`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: data,
      });
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const validateOTP = async (data) => {
    try {
      const response = await relayService({
        url: `/Users/validateOtp`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: data,
      });
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const getProcessName = async () => {
    try {
      const response = await relayService({
        url: `/ProcessMaster/getProcessName`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const recoverPwdOtp = async (data) => {
    try {
      const response = await relayService({
        url: `/Users/forgot-emailverification`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: data,
      });
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const forgetOtpVerifaction = async (data) => {
    try {
      const response = await relayService({
        url: `/Users/forgot-OtpVerifaction`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: data,
      });
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const forgetPassword = async (data) => {
    try {
      const response = await relayService({
        url: `/Users/forgot-password`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: data,
      });
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return [
    {
      userLogin,
      validateOTP,
      getProcessName,
      recoverPwdOtp,
      forgetOtpVerifaction,
      forgetPassword,
    },
  ];
};

export default useSignInHook;
