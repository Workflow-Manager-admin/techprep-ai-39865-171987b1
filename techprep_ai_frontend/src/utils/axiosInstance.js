import axios from "axios";
// PUBLIC_INTERFACE
const axiosInstance = axios.create({
  baseURL: "/api", // change as needed
});
export default axiosInstance;
