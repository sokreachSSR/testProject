import React, { useEffect, useRef, useState } from "react";
import { GreyBackGround } from "../../../utils/Style";
import { StaticImage } from "../../../utils/StaticImage";
import { useNavigate } from "react-router-dom";
import icons_email from "../../../assets/Icon_Email.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../Redux/slices/PopupSlice";
import { setLoading } from "../../../Redux/slices/LoadingSlice";
import { Resend, Verify } from "../../../Redux/service/Register_Service";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LoadingComponent from "../../othersComponent/LoadingComponent";
import { loginService } from "../../../Redux/service/login.service";
import LoadingComponentBtn from "../../othersComponent/LoadingComponentBtn";


export default function VerifyEmail() {
  const [otpcode,setOtp] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const close = useRef();
  const Loading = useSelector((state) => state.loading.value);


const [minutes, setMinutes] = useState(1);
const [seconds, setSeconds] = useState(30);


useEffect(() => {
  const interval = setInterval(() => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }

    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
      } else {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
    }
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, [seconds]);

  const ResendOtp = (e) =>{
    Resend().then((e)=>{
      setMinutes(1);
      setSeconds(30);
    })
  }


  const handleInput = (e) =>{
    const [name,value] = e.target;
    setOtp({...otpcode,[name]:value})
  }
  const checkCode = (e) => {
    dispatch (setLoading(true)) 
    Verify(formik.values.otpcode).then((e)=>{
      if(e.data && e.data.status === 200){
          // navigate("/home");
       loginService({email:localStorage.getItem("emailRegister"),password:localStorage.getItem("password")}).then((r)=>{
        localStorage.removeItem("emailRegister");
        localStorage.removeItem("password");
        dispatch (setLoading(false))
        close.current.click();
        window.location.reload();     
       })   
      }else{
        dispatch (setLoading(false))
        formik.setFieldError("otpcode","OTP code is not correct!")
      }
    })
  }; 
  const validationSchema = Yup.object({
    otpcode: Yup.string()
      .required('Confirmation code is required')
      .matches(/^[0-9]{6}$/, 'Confirmation code must be a 6-digit number'),
  });


  const formik = useFormik({
    initialValues: {
      otpcode: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    },
  });
  return (
    <div
      className={` ${GreyBackGround} overflow-y-hidden max-h-screen rounded-3xl `}
    >
      <div className="flex flex-wrap flex-col items-center bg-white p-2 md:p-5">
        <img src={icons_email}></img>
        <div className=" font-bold mt-0 md:mt-5 font-SecondaryFont">Enter Confirmation Code</div>
        <div className=" font-normal mt-0 md:mt-5 font-SecondaryFont">
          Enter the confirmation code that we sent to you
         
        <div className=" mt-0 md:mt-8">
          <div className="form-control w-full">
            <label className="label">
            </label>
            <input
              onChange={handleInput}
              type="text"
              name="otpcode"
              placeholder="Confirmation code"
              className={`w-full h-[45px] rounded-[20px] border-2 ${
                formik.touched.otpcode && formik.errors.otpcode
                  ? 'border-red-500'
                  : 'border-green_custom'
              }`}
              {...formik.getFieldProps('otpcode')}
            />
            {formik.touched.otpcode && formik.errors.otpcode ? (
              <div className="text-red-500">{formik.errors.otpcode}</div>
            ) : null}
          </div>
          <div className="countdown-text flex justify-between	">
      {seconds > 0 || minutes > 0 ? (
        <p>
          Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      ) : (
        <p>Didn't recieve code?</p>
      )}

      <button
        disabled={seconds > 0 || minutes > 0}
        style={{
          color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#04AA9C",
        }}
        onClick={ResendOtp}
      >
        Resend OTP
      </button>
    </div>
        </div>
        </div>
        <div className=" mt-10 md:mt-5">
        <button className="w-[320px] h-[45px]  bg-green_custom font-semibold  text-white rounded-[20px] p-0 md:px-12 py-2" onClick={checkCode}  disabled={!formik.isValid}>
            {Loading  ? <LoadingComponentBtn /> : "Confirmation"}
            
          </button>
        </div>
      </div>
      <label
        ref={close}
        htmlFor="my-modal"
        className="btn btn-sm btn-circle absolute right-2 top-2 z-30 bg-green_custom border-none hover:bg-hover_green_custom hidden"
      >
        ✕
      </label>
    </div>
  );
}
