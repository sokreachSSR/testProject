import { API } from "../../utils/Utils";

export  const certificateCreated = async () => {
    try {
      const response = await API.get("/user-reference/users");
      console.log(response)
      return response;
    } catch (error) {
      return error;
    }
  }

  export const saveReferenceCreated = async (type,requestData,title,process) => {
    try {
        const response = await API.post(`/user-reference?type=${type}&title=${title}&status=${process}`,requestData);
        return response
    } catch (error) {
        return error;
    }
}
export  const companyGetRequestList = async (page) => {
  try {
    const response = await API.get(`/reference/getAllRequestReference?asc=false&page=${page}&size=10`);
    // console.log(response,"abc") 
    // return response;
     return {...response,data:{...response.data,payload:response.data.payload.filter((save)=>save.referenceStatus==="pending")}};;
  } catch (error) {
    return error;
  }
}
export  const companyGetCompleteList = async (page) => {
  try {
    const response = await API.get(`/reference/company/reference?asc=false&desc=false&${page}=1&size=10`);
    // return response;
     return response;
  } catch (error) {
    return error;
  }
}

export const updateReference = async (requestData,process,id) => {
  try {
      const response = await API.put(`/user-reference/${id}/user?status=${process}`,requestData);
      return response
  } catch (error) {
      return error;
  }
}

export const deleteReference = async (id) => {
  try {
      const response = await API.delete(`/user-reference/${id}/user`);
      return response
  } catch (error) {
      return error;
  }
}

export const deleteReferenceOfCompany = async (id) => {
  try {
      const response = await API.delete(`/reference/user/${id}`);
      return response
  } catch (error) {
      return error;
  }
}

export const RequestReferenceService = async (id,requestType) => {
  try {
      const response = await API.post(`/reference/${id}?referenceType=${requestType}`);
      return response
  } catch (error) {
      return error;
  }
}




export const Deleteref= async (id) => {
  try {
      const response = await API.delete(`/reference/user/${id}`);
      return response
  } catch (error) {
      return error;
  }
}

export const getUserReference= async () => {
  try {
      const response = await API.get(`/user-reference/users?sort=ASC&page=1&size=100`);
      return response
  } catch (error) {
      return error;
  }
}

export const getUserReferenceCompleteFromCompany= async () => {
  try {
      const response = await API.get(`/reference/user/reference?desc=true&page=1&size=100`);
      return response
  } catch (error) {
      return error;
  }
}

export const getUserReferenceType= async () => {
  try {
      const response = await API.get(`/user-reference/REFERENCE?sort=ASC&page=1&size=100`);
      return response
  } catch (error) {
      return error;
  }
}


export const getUserCertificateType= async () => {
  try {
      const response = await API.get(`/user-reference/CERTIFICATE?sort=ASC&page=1&size=100`);
      return response
  } catch (error) {
      return error;
  }
}


export const acceptReference= async (id) => {
  try {
      const response = await API.put(`/reference/${id}`);
      return response
  } catch (error) {
      return error;
  }
}


export const rejectReference= async (id) => {
  try {
      const response = await API.delete(`/reference/${id}`);
      return response
  } catch (error) {
      return error;
  }
}

export const getReferenceRequest= async (page) => {
  try {
      const response = await API.get(`/reference/user?asc=false&page=${page}&size=100`);
      return response
  } catch (error) {
      return error;
  }
}

export const getReferenceRequestforCompany= async () => {
  try {
      const response = await API.get(`/reference/getAllRequestReference?asc=false&desc=false&page=1&size=100`);
      return response
  } catch (error) {
      return error;
  }
}

export const updateRefToProgress= async (id,type) => {
  var body;
  if(type==="REFERENCE"){
   body = {form:'"<div><div><div><h1 style="text-align: center;"><strong>Reference Letter</strong></h1><p style="text-align: center;">This is to certify that</p><h2 style="text-align: center;"><strong>Sim Sokhen</strong></h2><p style="text-align: center;">has successfully completed the certification</p><h3 style="text-align: center;"><strong>Java Developer</strong></h3><p style="text-align: center;">with score of A+</p><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://imgtr.ee/images/2023/06/23/d7Cfq.png" alt="" width="137" height="174"></strong></p><p style="text-align: center;">05 May, 2023</p></div></div></div>"'} 
  }else{
  body = {form:'"<div><div><div><h1 style="text-align: center;"><strong>Reference Letter</strong></h1><p style="text-align: center;">This is to certify that</p><h2 style="text-align: center;"><strong>Sim Sokhen</strong></h2><p style="text-align: center;">has successfully completed the certification</p><h3 style="text-align: center;"><strong>Java Developer</strong></h3><p style="text-align: center;">with score of A+</p><p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://imgtr.ee/images/2023/06/23/d7Cfq.png" alt="" width="137" height="174"></strong></p><p style="text-align: center;">05 May, 2023</p></div></div></div>"'} 
  }
  try {
      const response = await API.put(`/reference/create/${id}`,body);
      return response
  } catch (error) {
      return error;
  }
}
export const updateRefOnProgress= async (id,body) => {
  try {
      const response = await API.put(`/reference/create/${id}`,body);
      return response
  } catch (error) {
      return error;
  }
}
export const updateRefToComplete= async (id) => {
  try {
      const response = await API.put(`/reference/complete/${id}`);
      return response
  } catch (error) {
      return error;
  }
}
export const getAllProgressRef= async () => {
  try {
      const response = await API.get(`/reference/progrss/reference?asc=false&desc=false&page=1&size=100`);
      return response
  } catch (error) {
      return error;
  }
}

