import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUserDetail } from '../Redux/slices/userDetailSlide';
import { BASE_URL1 } from '../utils/Utils';

export default function HomepageComponent() {
  //used to navigate routes
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logout = () =>{
    localStorage.removeItem('Token');
    localStorage.removeItem('userRole');
    dispatch(setUserDetail({onesignal:"",role:"annonymous"}))
    navigate("/")
  }
  const get_json = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL1}/api/v1/test-controller/get-jsonb`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      );
      return response;
    } catch (e) {
    }
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div>HomepageComponent</div>
      <br />

      <button onClick={logout} 
      type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Logout
      </button>
      <br/>
      <button onClick={get_json} 
      type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Get Json
      </button>
    </div>
  )
}