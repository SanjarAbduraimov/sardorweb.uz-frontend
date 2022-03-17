import Axios from "axios";

const axios = Axios.create({
  baseURL: `${process.env.API_URL}/api`,
  withCredentials: true,
});
axios.interceptors.request.use(
  (configs) => {
    configs.headers.authorization = process.env.API_TOKEN
      ? `Bearer ${process.env.API_TOKEN}`
      : "";
    return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response.data, "===== error.response.data =====");
    if (error?.response?.status === 401) {
      return Promise.reject(error.response);
    }
    return Promise.reject(error.response);
  }
);

export { axios as default };
