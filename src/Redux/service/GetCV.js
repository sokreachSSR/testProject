import axios from "axios";
import { API } from "../../utils/Utils";


export const GetUserCV = async (id) => {
   
    try {
        const response = await API.get(`/apply-job/${id}/company?sort=ASC&page=1&size=10`);
        console.log("user CV : ",response)
    return response;
  } catch (error) {
    return error;
  }
};


