import axios from "axios";

export default axios.create({
  // update this every 8 hours
  baseURL: "http://c9c996ef.ngrok.io"
});
