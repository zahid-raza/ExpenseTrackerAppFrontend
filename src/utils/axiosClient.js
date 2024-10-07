import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://expense-tracker-backend-brown.vercel.app",
});
