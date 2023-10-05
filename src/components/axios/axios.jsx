/** @format */

import axios from "axios";

const instance = axios.create({
  // API - cloud function
  baseURL: "https://us-central1-clone-f8844.cloudfunctions.net/api",
});
export default instance;
//localhost baseURL:
//
// https://127.0.0.1:5001/clone-f8844/us-central1/api
