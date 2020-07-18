import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyD2V0SEzrGHbjUeAih9bXJTi8IvdZywLvY",
  },
});
