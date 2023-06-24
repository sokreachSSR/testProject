import axios from "axios";
import { API, Auth } from "../../utils/Utils";
// import { google } from 'googleapis';
// import { OAuth2Client } from 'google-auth-library';
export const RegisterWithGoogle = async (inputRegisterDetail) => {
  try {
    const response = await Auth.post(
      "/auth/register-google",
      inputRegisterDetail
    );
    return response;
  } catch (e) {
    return e;
  }
};

export const register = async (user) => {
  try{
    const response = await Auth.post("/auth/register", user);
    return response
  }catch(error){
    return error;
  }

}



export const loginWithGoogle = async (user) => {
  try {
    const response = await Auth.post("/auth/login", user);
    localStorage.setItem("Token", response.data.payload.token);
    return response;
  } catch (error) {
    return error;
  }
};

export const GetBODGender = async (googleId, accessToken) => {
  try {
    const response = await axios
      .get(
        `https://people.googleapis.com/v1/people/${googleId}?personFields=birthdays,genders&access_token=${accessToken}&key=AIzaSyCTxTtb8hnWnazN1ZchXJp7JixQglOxjyA`
      )
      .then((response) => {
        console.log(JSON.stringify(response, null, 4));
      }) //You will get data here
      .catch((error) => {
        console.warn(JSON.stringify(error, null, 4));
      });
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const SendEmail = async (email) => {
  try {
    const response = await Auth.post("/auth/Email/sendOTPcode", email);
    return response;
  } catch (e) {
    return e;
  }
};

export const OtpCode = async (otpcode) => {
  try {
    console.log(otpcode * 1);
    const response = await Auth.post("/auth/" + otpcode * 1, {
      email: localStorage.getItem("email"),
    });
    return response;
  } catch (e) {
    return e;
  }
};

export const ResetPassword = async (password) => {
  try {
    const response = await Auth.put(
      "/auth/ResetPassword/" + localStorage.getItem("otpcode") * 1,
      { email: localStorage.getItem("email"), ...password }
    );
    return response;
  } catch (e) {
    return e;
  }
};



export const Verify = async(otpcode) => {
  try {
    const response = await Auth.put("/auth/enable-account-confirmation/"+otpcode*1+"?email="+localStorage.getItem("emailRegister"));
  return response;
  }catch(e){
    return e;
  }
};


export const Resend = async() => {
  try{
    const response = await Auth.post("/auth/request-enable-account"+"?email="+localStorage.getItem("emailRegister"))
    return response;
  }catch(e){
    return e;
  }
}
export const ResendForPassword = async (email) => {
  try {
    const response = await Auth.post("/auth/Email/sendOTPcode", {email: localStorage.getItem("email")});
    return response;
  } catch (e) {
    return e;
  }
};
