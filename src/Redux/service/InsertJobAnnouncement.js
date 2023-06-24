import axios from "axios";
import { API, APIImage, Auth } from "../../utils/Utils";
import id from "date-fns/esm/locale/id";

export const JobAnnouncement = async (payloads) => {
  console.log("payloadddddddd : ", payloads); 
  try {
    const response = await API.post(
      `/job/announcements/insert?typeOfJob=${payloads.typeOfJob}&termJob=${payloads.termJob}&location=${payloads.locationName}&salary=${payloads.salary}`,
      {
        // title: payloads.title,
        title: "helloadadadad",
        description:{workday:payloads.workday,Experience:payloads.Experience,other:payloads.other},
        qualifications: payloads.qualifications,
        requirementsAndSkill: payloads.requirementsAndSkill,

      }
    
    );

   return response;
  } catch (error) {
    console.log("Error : ", error);
      
    return error;
  }
};

// export const InsertImage = async (payload) => {
//   // console.log("payload : ", payloads); 
//   try {
//     const response = await APIImage.post(
//       `/apply-job/${id}`,
//       {
//         image: id.InsertImage,    
//       }
    
//     );
//     return response;
//   } catch (error) {
//     console.log("Error : ", error);
      
//     return error;
//   }
// // };
export const uploadFile = async (id,payloads) => {
  try {
    const response = await APIImage.post(`/apply-job/${id}`,{
      cv: payloads  
      }
    
    );


    return response;
  } catch (error) {
    console.log("Error : ", error);
      
    return error;
  }
};
