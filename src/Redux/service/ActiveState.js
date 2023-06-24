import axios from "axios";
import { API } from "../../utils/Utils";

// job
export const ActiveState =  (value) => {
  localStorage.setItem(value)
}
