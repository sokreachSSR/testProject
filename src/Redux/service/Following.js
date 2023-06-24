import axios from "axios";
import { API, APIImage } from "../../utils/Utils";

// Following 
export const Following = async (id) => {
  try {
    const response = await API.get("/Follow");
    return response;
  } catch (error) {
    return error;
  }
}
export const FollowingUser = async (id) => {
  try {
    const response = await API.get("/Follow");
    return response;
  } catch (error) {
    return error;
  }
}