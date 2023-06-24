import axios from "axios";
import { API, Auth } from "../../utils/Utils";

// job
export const Jobs = async () => {
  try {
    const response = await Auth.get("/job/announcements");
    return response;
  } catch (error) {
    return error;
  }
}
export const Jobsbyuser = async (page) => {
  try {
    const response = await API.get(`/job/announcements/users?sort=DESC&page=${page}`);
    return response;
  } catch (error) {
    return error;
  }
}
export const Jobsbypage = async (page) => {
  try {
    const response = await Auth.get(`/job/announcements?sort=DESC&page=${page}`);
    return response;
  } catch (error) {
    return error;
  }
}
