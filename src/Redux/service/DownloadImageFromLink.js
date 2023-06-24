import { async } from "@firebase/util";
import axios from "axios";

export async function createFileFromURL(url) {
    try {
      const response = await axios.get(url, {
        responseType: 'blob',
      });
  
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      const file = new File([blob], fileName);
  
      return file;
    } catch (error) {
      console.error('Error creating file:', error);
      return null;
    }
  }