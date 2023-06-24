import axios from "axios";
import { API, Auth } from "../../utils/Utils";

export const UpdateJobAnnountment = async (id,payloads) => {
  try {
    const response = await API.put(`/job/announcements/${id}/update?typeOfJob=${payloads.typeJob}&termJob=${payloads.termJob}&location=${payloads.location}&salary=${payloads.salary}`,
    // const response = await API.put(`/job/announcements/${id}/update?typeOfJob=${payloads.typeOfJob}&termJob=${payloads.termJob}&location=${payloads.locationName}&salary=${payloads.salary}`,
      {
          title: "hello",
        // description: payloads.workday,
        // description: payloads.Experience,
        description:{workday:payloads.workday,Experience:payloads.Experience,other:payloads.other},
        qualifications: payloads.qualifications,
        requirementsAndSkill: payloads.requirementsAndSkill,

      }
    
    );

  
    return response;
  } catch (error) {
      
    return error;
  }
};
