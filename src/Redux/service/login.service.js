import axios from "axios";
import { API, Auth } from "../../utils/Utils";
import { loginWithGoogle } from "./Register_Service";
import { UserProfile } from "./UserProfile";
import { setUserDetail } from "../slices/userDetailSlide";
import { useDispatch } from "react-redux";

// login
export const loginService = async (user) => {
  try {

    const response = await Auth.post(`/auth/login`, user);
    localStorage.setItem("Token", response.data.payload.token);
    return response;
  } catch (error) {
    return error;
  }
};

export const register = async (user) => {
  try {
    const response = await Auth.post(`/auth/Register`,user);

    if (response.status === 200) {
      console.log("register successful");
    }
    return response;
  } catch (error) {
    return error;
  }
};

// Reset password
export const ResetPassword = async (body) => {
  console.log(body);
  try {
    const response = await API.put("/auth/changePassword", body);
    return response;
  } catch (error) {
    return error;
  }
}

export const WhenLogin = (userDetails) => {
  // const dispatch = useDispatch();
  //   loginWithGoogle(userDetails).then((r) => {
  //   UserProfile().then((res) => {
  //   dispatch(setUserDetail({...res.data.payload, role : "user"}));
  //   });
  // });	          
}
