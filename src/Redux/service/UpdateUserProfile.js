import axios from "axios";
import { API, APIImage, Auth } from "../../utils/Utils";

export const UpdateUserDetails = async (payloads) => {
  try {
    const response = await API.put(
      `userDeatail?jobType=${payloads.jobType.replace(" ","_")}`,
      {
        education: payloads.education,
        experience: payloads.experience,
        skill : payloads.skill,
        address: payloads.address,
        phoneNumber: payloads.phoneNumber,
        description: payloads.description,
      
      }
    
    );

    return response;
  } catch (error) {
      
    return error;
  }
};
export const UpdateUserProfile = async (payloads) => {
  // console.log("payload : ", payloads); 
  try {
    const response = await APIImage.put(
      `/userDeatail/UploadProfile`,
      {
        image: payloads.profileImage,    
      }
    
    );
    return response;
  } catch (error) {
    console.log("Error : ", error);
      
    return error;
  }
};
export const UpdateUserCover = async (payloads) => {
  // console.log("payload : ", payloads); 
  try {
    const response = await APIImage.put(
      `/userDeatail/UploadCover`,
      {
        image: payloads.coverImage,    
      }
    
    );


    return response;
  } catch (error) {
    console.log("Error : ", error);
      
    return error;
  }
};

