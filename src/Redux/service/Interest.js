import { API, APIImage } from "../../utils/Utils";


export const interestUser = async (id) => {
    try {
        const response = await API.put(`interest/${id}/interestAndUnInterest`);
        return response;
      } catch (error) {
        return error;
      }
}

export const interestUserForCompany = async () => {
  try {
      const response = await API.get(`interest/list-of-user/users?sort=ASC&page=1&size=10`);
      return response;
    } catch (error) {
      return error;
    }
}