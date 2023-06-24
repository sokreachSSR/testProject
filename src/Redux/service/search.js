import { API } from "../../utils/Utils";

export const search111 = async(char,page) =>{
    try{
        const response = await API.get(`/Search?character=${char}&sort=ASC&page=${page}`);
        return response;   
    }catch(e){
        return e ;
    }
    // try {
    //     console.log(char,page)
    //     const response = await API.get(
    //       `/Search?character=S&sort=ASC&page=1&size=10`
        
    //     );
    
      
    //     return response;
    //   } catch (error) {
    //     console.log("Error : ", error);
          
    //     return error;
    //   }

}