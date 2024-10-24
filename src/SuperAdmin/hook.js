import relayService from "../router/Axios/hook";

const useSuperAdminApis = () => {
  const addProcessDetails = async (data) => {
    try {
      const response = await relayService({
        url: `/ProcessMaster/addProcess`,
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

  const updateProcessDetails = async (data) => {
    try {
      const response = await relayService({
        url: `/ProcessMaster/updateProcess`,
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

  const getProcessDetails = async (processName) => {
    try {
      const response = await relayService({
        url: processName
          ? `/ProcessMaster/getProcess?ProcessName=${processName}`
          : `/ProcessMaster/getProcess`,
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

  return [
    {
      addProcessDetails,
      updateProcessDetails,
      getProcessDetails,
      getProcessName,
    },
  ];
};

export default useSuperAdminApis;
