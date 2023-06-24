import axios from "axios";
import { API } from "../../utils/Utils";

// Connection see companies
export const ConnectionCompany = async () => {
  try {
    const response = await API.get("/company");
    return response;
  } catch (error) {
    return error;
  }
}


// Connection follow companies
export const ConnectionFollowCompany = async (id) => {
  try {
    const response = await API.post("/FollowCompany/" + id);
    return response
  } catch (error) {
    return error;
  }
}