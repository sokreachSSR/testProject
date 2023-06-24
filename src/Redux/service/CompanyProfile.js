import axios from "axios";
import { API, APIImage } from "../../utils/Utils";

// Connection see companies
export  const CompanyProfile = async () => {
  try {
    const response = await API.get("/company/user");
    return response;
  } catch (error) {
    return error;
  }
}
export  const CompanyDetailProfile = async () => {
  try {
    const response = await API.get("/companyDetail/user");
    return response;
  } catch (error) {
    return error;
  }
}

export  const EditCompanyDetailProfile = async (companyDetail) => {
  try {
    const response = await API.put(`/companyDetail?companyType=${companyDetail.companyType}`, companyDetail);
    return response;
  } catch (error) {
    return error;
  }
}


export const uploadCompanyCover = async (images) => {
  try {

    const response =await APIImage.put("/companyDetail/updateCompanyCover",{image:images})
    return response;

  }catch(e){
    return e;
  }
}

export const uploadCompanyProfile = async  (images) => {
  try{
    const response = await APIImage.put("/companyDetail/updateCompanyProfile",{image:images})
  }catch(e){
    return e ;
  }
}



