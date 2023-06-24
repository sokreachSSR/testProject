import axios from "axios";
import OneSignal from 'react-onesignal';
import { API, BASE_URL2 } from "../../utils/Utils";

// login
export const RegisterNotification =(userId) => {
  
    OneSignal.init({
        appId: '035ff7e3-7135-4a34-9067-1b3d264b1749', // Replace with your OneSignal App ID
        allowLocalhostAsSecureOrigin: true,
        autoRegister: true,
        autoResubscribe: true,
        notificationClickHandlerMatch: 'origin',
        notificationClickHandlerAction: 'focus',
      });
      OneSignal.setExternalUserId(userId.toString())
      // Add an event listener for receiving push notifications
    //   OneSignal.on('notificationDisplay', (event) => {
    //     console.log('Received push notification:', event);
    //   });
      // OneSignal.sendTag('tech', "Please Subscribe Portify").then(()=>{
      //   OneSignal.setExternalUserId(userId.toString())
      //     console.log("taggled onHandleTag")
      //   })
}
export const initOnsingal =() => {
    OneSignal.init({
        appId: '035ff7e3-7135-4a34-9067-1b3d264b1749', // Replace with your OneSignal App ID
        allowLocalhostAsSecureOrigin: true,
        autoRegister: true,
        notificationClickHandlerMatch: 'origin',
        notificationClickHandlerAction: 'focus',
      });
}
 export const sendNotification = (listID,title="this is title",message="hello user",link=window.location.href.toString()) => {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Basic YTg5ZWM0NDYtYTJhOC00ODdkLTgwZDAtNmJkNmJiNDJmMGMx', // Replace with your OneSignal REST API key
      };
      const data = {
        app_id: '035ff7e3-7135-4a34-9067-1b3d264b1749', // Replace with your OneSignal app ID
        headings: { en: title },
        url: BASE_URL2+link,
        // included_segments: [
        //   "Active Users"
        // ],
        include_external_user_ids:[listID],
        // channel_for_external_user_ids: "sautsokreach@gmail.com",
        // include_player_ids:["23ab8436-095b-477f-a3ce-93be64f5e0ae"],
        // filters: [{ field: 'include_external_user_ids', relation: '=', value: "1802" }],
        // filters: [{ field: 'include_player_ids', value: ["23ab8436-095b-477f-a3ce-93be64f5e0ae"] }],
        contents: { en: message },
      };
    const userId  = OneSignal.getExternalUserId();
    console.log(userId)

    axios.post('https://onesignal.com/api/v1/notifications', data, { headers })
    .then(response => {
      console.log('Notification sent successfully:', response);
    })
    .catch(error => {
      console.error('Failed to send notification:', error);
    });
}

export const getNotification = async (page) => {
  try {
      const response = await API.get(`/notification?asc=false&desc=true&page=${page}`);
      return response;
  } catch (error) {
      return error;
  }
}
export const addNotificationPost = async (post,status,sender,body) => {
  try {
      const response = await API.post(`/postNotification?typePost=${post}&postStatus=${status}&isSenderCompany=${sender}`,body);
      return response;
  } catch (error) {
      return error;
  }
}
export const addNotificationReference = async (page) => {
  try {
      const response = await API.get(`/notification?sort=DESC&page=${page}`);
      return response;
  } catch (error) {
      return error;
  }
}

export const updateStatus = async (id) => {
  try{
    const response = await API.put("/updateStatus/"+id)
    return response;
  }catch(e){
    return e;
  }
}
export const CountNotification = async () => {
  try {
    const response = await API.get(`/countNotification`);
    return response;
} catch (error) {
    return error;
}

}


export const getCompanyNotification = async (page) =>{
  try {
    const response = await API.get(`/notificationCompany?asc=false&desc=false&page=${page}`);
    return response;
} catch (error) {
    return error;
}
}


export const CountCompanyNotification = async () => {
  try {
    const response = await API.get(`/countCompanyNotification`);
    return response;
} catch (error) {
    return error;
}

}

