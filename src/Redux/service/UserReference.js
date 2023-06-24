import { API } from "../../utils/Utils";

export  const SearchCompanyData = async () => {
  
    try {
      const response = await API.get("/companyDetail/getAllCompantDetail?&size=100");
      return response;
    } catch (error) {
      return error;
    }
}
export  const SearchFollowingCompany = async () => {
  
  try {
    const response = await API.get("/FollowCompany/getFollowByUser?asc=false&desc=false&page=1&size=100");
    return response;
  } catch (error) {
    return error;
  }
}
