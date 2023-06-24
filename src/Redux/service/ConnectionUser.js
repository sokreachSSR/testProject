import axios from "axios";
import { API, APIImage } from "../../utils/Utils";

// Connection see companies
export const ConnectionUser = async () => {
  try {
    const response = await API.get("/userDeatail/userSuggestion");
    return response;
  } catch (error) {
    return error;
  }
}

// Connection see companies
export const AllConnectionUser = async () => {
  try {
    const response = await API.get("/userDeatail/userSuggestionWithoutToken");
    return response;
  } catch (error) {
    return error;
  }
}