import axios from "axios";
import { cookies } from "next/headers";
import { setCookies } from "./utils/cookies";

console.log(process.env.BACKEND_URL);

const privateAxios = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

privateAxios.interceptors.request.use((config) => {
  config.headers["cookie"] = cookies().toString();

  return config;
});

privateAxios.interceptors.response.use((response) => {
  const cookies = response.headers["set-cookie"] ?? [];

  setCookies(cookies);

  return response;
});

export default privateAxios;
