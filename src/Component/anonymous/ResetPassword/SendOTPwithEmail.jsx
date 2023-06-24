import React, { useState } from "react";
import LogoPortify from "../../../assets/Portify_logo.svg";
import { SendEmail } from "../../../Redux/service/Register_Service";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../Redux/slices/PopupSlice";
import { setLoading } from "../../../Redux/slices/LoadingSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponentBtn from "../../othersComponent/LoadingComponentBtn";

export default function SendOTPwithEmail() {
  const Loading = useSelector((state) => state.loading.value);
  const [email, setEmail] = useState({});
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, {
      message: "Invalid email address.",
    })
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values,{setFieldError}) => {
      handleFormSubmission(values,setFieldError);
    },
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleFormSubmission = (values,setFieldError ) => {
    dispatch(setLoading(true));
    SendEmail(values.email).then((response) => {
      localStorage.setItem("email", values.email);
      dispatch(setLoading(false));
      if (response.data !== "Email not found") {
        dispatch(setPopup("verifyOTP"));
      } else {
        setFieldError("email","Email not Found")
      }
    });
  };
  

  return (
      <div className="flex flex-wrap flex-col justify-center items-center bg-white p-2 md:p-5 w-[500px] rounded-[20px] border-2 border-accent">
        {/* logo */}
        <div className="w-32">
          <img src={LogoPortify}/>
        </div>
        {/* info */}
        <div className=" font-normal mt-2 md:mt-4 text-center text-gray-400">
          Enter the email address associated with your account and we’ll send
          you a number to reset your password
        </div>
        <div className="form-control w-full mt-2 md:mt-4">
          <label className="label">
            <span className="font-semibold text-md text-gray-500">Email</span>
          </label>
          <input
            onChange={handleInput}
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className={`w-full h-[45px] rounded-[20px] border-2 text-gray-sm ${
              formik.errors.email ? "border-red-500" : "border-green_custom"
            }`}
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>
        <button
          onClick={formik.handleSubmit}
          className="w-full h-[45px] mt-2 md:mt-4 bg-green_custom font-semibold text-white rounded-[20px] p-0 md:px-12 py-2"
        >
          {Loading ? <LoadingComponentBtn /> : "Continue"}
        </button>
      </div>
  );
}
