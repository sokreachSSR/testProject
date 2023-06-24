import { API } from "../../utils/Utils";

export  const CompanyInterest = async () => {
    try {
      const response = await API.get("/interest/list-of-company/users");
      return response;
    } catch (error) {
      return error;
    }
}
