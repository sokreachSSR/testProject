import React, { useEffect, useState } from 'react'
import { StaticImage } from '../../../utils/StaticImage'
import { OtpCode, Resend, ResendForPassword } from '../../../Redux/service/Register_Service';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../../../Redux/slices/PopupSlice';
import { setLoading } from '../../../Redux/slices/LoadingSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoadingComponentBtn from '../../othersComponent/LoadingComponentBtn';




export default function VerifyOTPCode() {
  const Loading = useSelector((state)=>state.loading.value)
  const [otpcode,setOtp] = useState({});
  const dispatch = useDispatch();
  const handleInput = (e) =>{
    const {name, value} = e.target;
    setOtp({...otpcode,[name]:value})
  };

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
    ResendForPassword().then((e)=>{
      setMinutes(1);
      setSeconds(30);
    })
  }



  const handleConfrim = (e) => {
    e.preventDefault();
  dispatch (setLoading(true))
    OtpCode(formik.values.otpcode).then((e)=>{
      localStorage.setItem("otpcode",formik.values.otpcode)
  dispatch (setLoading(false))
      if(e.data === true){
        dispatch(setPopup("confirmpassword"))
      }else{
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
    <div>
        <div className="flex flex-wrap flex-col justify-center items-center bg-white p-2 md:p-5 h-[500px] rounded-3xl border-2 border-accent">
        <img src={StaticImage.Logo} className="w-[128px]"></img>
          <div className=" font-semibold mt-0 md:mt-5 px-32 text-center">
            We noticed unusual activity from your account, so we've logged you out.
          </div>
      
        <div className=" mt-0 md:mt-8">
          <div className="form-control w-full">
            <label className="label">
            </label>
            <input
              onChange={handleInput}
              type="text"
              name="otpcode"
              placeholder="Confirmation code"
              className={`w-[320px] h-[45px] rounded-[20px] border-2 ${
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
        </div>
        <div className=" w-[57%] countdown-text flex justify-between">
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
        <div className=" mt-10 md:mt-5">
        <button className="w-[320px] h-[45px]  bg-green_custom font-semibold  text-white rounded-[20px] p-0 md:px-12 py-2" onClick={handleConfrim}>
            {Loading  ? <LoadingComponentBtn /> : "Confirmation"}
          </button>
        </div>
      </div>
    </div>
  )
}
