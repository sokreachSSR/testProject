import axios from "axios";
import { API, Auth } from "../../utils/Utils";
import { Data } from "emoji-mart";

export const deleteJobAnnouncement = async (id) => {
  try {
    const response =  await API.delete(`/job/announcements/${id}/delete`);
  
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};