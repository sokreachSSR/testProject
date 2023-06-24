import axios from "axios";
import { API } from "../../utils/Utils";

export const SavePost = async () => {
    try {
        const response = await API.get("/saved/users");
        return {...response,data:{...response.data,payload:response.data.payload.filter((save)=>save.savePostType==="POST")}};
    } catch (error) {
        return error;
    }
}
export const SavePostV1 = async (page) => {
    try {
        const response = await API.get(`/saved/users?sort=DESC&page=${page}`);
        return {...response,data:{...response.data,payload:response.data.payload.filter((save)=>save.savePostType==="POST")}};
       
    } catch (error) {
        return error;
    }
}

export const AddSavePost = async (id) => {
    try {
        const response = await API.post("/saved/users/" + id + "/post?type=POST");
        return response
    } catch (error) {
        return error;
    }
}


export const DeleteSavePost = async (id) => {
    try {
        const response = await API.delete("/saved/" + id + "/users");
        return response
    } catch (error) {
        return error;
    }
}

export const SavePostForCompanyAnnouncement = async () => {
    try {
        const response = await API.get(`/saved/ANNOUNCEMENT/users`);
        return response;
    } catch (error) {
        return error;
    }
}

export const AddSavePostAnnouncement = async (id) => {
    try {
        const response = await API.post("/saved/users/" + id + "/post?type=ANNOUNCEMENT");
        return response
    } catch (error) {
        return error;
    }
}