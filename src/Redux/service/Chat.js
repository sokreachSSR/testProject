import axios from "axios";
import { API } from "../../utils/Utils";

// job
export const SendChat = async (message) => {
  try {
   
    const response = await API.post("/addMessage",message);
    return response;
  } catch (error) {
    return error;
  }
}
