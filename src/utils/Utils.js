import axios from "axios";
export const BASE_URL1 = `https://api.portify.info`;
export const BASE_URL2 = `http://localhost:3000`;
export const BASE_URL = `${BASE_URL1}/api/v1`;
export const BASE_URL3 = `${BASE_URL1}/api/v1/images/PROFILE?fileName=`;
export const TOKEN = localStorage.getItem("Token");

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
    "Content-type": "application/json;charset=utf-8",
  },
});

export const Auth = axios.create({
    baseURL : BASE_URL,
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    },
})

export const APIImage = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Token")}`,
    "Content-Type": "multipart/form-data",
  },
});

