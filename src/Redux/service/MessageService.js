import { API } from "../../utils/Utils";

export const getChatWith = async (senderId, page) => {
    try {
      const response = await API.get(`getAllReceiver/sender/${senderId}?page=${page}&size=7`);
      return response;
    } catch (error) {
      return error;
    }
}

export const getMessageDetail = async (senderId, page, size) => {
  try {
    const response = await API.get(`getMessage/${senderId}?sort=DESC&page=${page}&size=${size}`);
    return response;
  } catch (error) {
    return error;
  }
}

export const insertMessage = async (messageObject) => {
  try {
    const response = await API.post(`addMessage`, messageObject);
    return response;
  } catch (error) {
    return error;
  }
}
