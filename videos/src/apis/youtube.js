import axios from "axios"; //npm install --save axios

const KEY = "AIzaSyAL_i7TsuCs3-UwA0dKRf_6s0NjvBn0gNA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
