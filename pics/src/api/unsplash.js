import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID V7xEWA5I-noVRMI7h9Wp2DYit5si4EiDZfMG-Q0NYYo",
  }
});
