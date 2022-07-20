import axios from "axios";
import { isServer } from "../utils/checks";

const instance = axios.create({
  baseURL: isServer ? process.env.API_URL_DOCKER : process.env.API_URL,
  timeout: 1000,
});
export default instance;
