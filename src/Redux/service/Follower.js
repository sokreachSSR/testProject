import axios from "axios";
import { API, APIImage } from "../../utils/Utils";

// Follower
export const Follower = async () => {
  try {
    const response = await API.get("/Follow/follower");
    return response;
  } catch (error) {
    return error;
  }
}

// Connection follow user
export const ConnectionFollowUser = async (id) => {
  try {
    const response = await API.post("/Follow/" + id);
    return response
  } catch (error) {
    return error;
  }
}