import axios from "axios";
import { API } from "../../utils/Utils";

// User Profile
export const UserProfile = async () => {
  try {
    const response = await API.get("/userDeatail/user");
    return response;
  } catch (error) {
    return error;
  }
};

export const UserById = async (id) => {
  try{       
    const response = await API.get(`/userDeatail/${id}`)
    return response;
  }catch (e){
    return e;
  }
}

