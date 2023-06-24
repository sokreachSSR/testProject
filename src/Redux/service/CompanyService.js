import { API } from "../../utils/Utils";

export const createCompany = async (companyName) => {
    try {
      const response = await API.post("/company", companyName);
      return response;
    } catch (error) {
      return error;
    }
}

export const getCompany = async () => {
  try {
    const response = await API.get("/company/user");
    return response;
  } catch (error) {
    return error;
  }
};

export const createCompanyDetails = async (companyType, companyDetail) => {
  try {
    const response = await API.post(`/companyDetail?companyType=${companyType}`, companyDetail);
    return response;
  } catch (error) {
    return error;
  }
};

export const companyById = async (id) => {
  try{
    const response = await API.get(`/companyDetail/getCompanyById/${id}`)
    return response;
  }catch(e){
    return e;
  }
}