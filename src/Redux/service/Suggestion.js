import { API, Auth } from "../../utils/Utils";

export const suggestionUser = async () => {
    try{
        const response = await API.get("/userDeatail/userSuggestion");
        return response;
    }catch(error){
        return error;
    }
}
export const suggestionUserLanding = async () => {
    try{
        const response = await Auth.get("/userDeatail/userSuggestionWithoutToken");
        return response;
    }catch(error){
        return error;
    }
}

export const suggestionCompany = async () => {
    try{
        const response = await Auth.get("/company");
        return response;
    }catch(error){
        return error;
    }
}

export const suggestionForCompany = async () => {
    try{
        const response = await API.get("/company/companySuggestion");
        return response;
    }catch(error){
        return error;
    }
}

export const suggestionCompanyWhenLogin = async () => {
    try{
        const response = await Auth.get("/company");
        console.log(response)
        return response;
    }catch(error){
        return error;
    }
}