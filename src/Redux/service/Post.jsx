import { API, APIImage } from "../../utils/Utils";

// login
export const PostUser = async (title,isCompany,body) => {
  try {
    const response = await APIImage.post(`/posts/?title=${title}&isCompany=${isCompany}`,body);
    return response;
  } catch (error) {
    return error;
  }
}
export const GetPostUser = async () => {
  try {
    const response = await API.get(`/posts?sort=ASC`);
    return response;
  } catch (error) {
    return error;
  }
}
export const GetPostUserbyPage = async (page) => {
  try {
    const response = await API.get(`/posts?sort=ASC&page=${page}`);
    return response;                      
  } catch (error) {
    return error;
  }
}

export const GetPostUserProfile = async () => {
  try {
    const response = await API.get(`/posts/users?&size=10&sort=DESC&`);
    return response;
  } catch (error) {
    return error;
  }
}

export const GetPostUserProfileGetPost = async (page) => {
  try {
    const response = await API.get(`/posts/users?&size=10&sort=DESC&page=${page}`);
    return response;
  } catch (error) {
    return error;
  }
}
export const DeletePostUserProfile = async (id) => {
  try {
    const response = await API.delete(`/posts/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}
export const UpdatePostUserProfile = async (id,title,iMage) => {
  console.log("loaddddddddddddddd:  :  ",id,title,iMage);

  try {
    const response = await API.put(`/posts/${id}/users?title=${title}`);
    return response;
  } catch (error) {
    return error;
  }
}

export const getPostById = async (id,page) => {
  try{
    const response = await API.get(`/posts/users/${id}?sort=DESC&page=${page}`)
    return response;

  }catch(e){
    return e 
  }
}


export const getCompanyPost = async (id,page) => {
  try{
    const response = await API.get(`/posts/company/${id}?sort=DESC&page=${page}`)
    return response;
  }catch(e){
    return e 
  }
};


export const getPostByCompany = async (page) => {
  try{
    const response = await API.get(`/posts/company?sort=DESC&page=${page}&size=10`)
    return response;
  }catch (e){
    return e;
  }
 
};
export const getPostId = async (id) => {
  try{
    const response = await API.get(`/posts/${id}`)
    return response;
  }catch (e){
    return e;
  }
 
}



