import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginService, register } from "../../../Redux/service/login.service";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { SignupSchema, logoLink } from "../../../utils/Constant";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GreenBackGround } from "../../../utils/Style";
import {
  RegisterWithGoogle,
  loginWithGoogle,
} from "../../../Redux/service/Register_Service";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../Redux/slices/PopupSlice";
import LogoPortify from "../../../assets/LogoPortify.png";
import GoogleSignup from "../../othersComponent/GoogleSignup";
import LoadingComponent from "../../othersComponent/LoadingComponent";
import { setLoading } from "../../../Redux/slices/LoadingSlice";
import LoadingComponentBtn from "../../othersComponent/LoadingComponentBtn";
import { FiCalendar, FiMail, FiUser } from "react-icons/fi";

export default function SignupPage_LeftSide() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Loading = useSelector((state) => state.loading.value);

  //show or hidden password field
  const [showPassword, setShowPassword] = useState(false);

  //user
  const [user, setUser] = useState({ fullname: "" });

  //toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //login page
  const Login = () => {
    // dispatch(setPopup("verify"))
  };
  //handle user input
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //handle fomr login
  const handleLogin = () => {
    loginService(user).then((r) => {
      if (r.status === 200) {
        navigate("/home");
      }
    });
  };

  return (
    <div className="p-6 pt-2 w-[320px] xs:w-[375px] sm:w-[500px] md:w-[700px] bg-white rounded-[20px]">
      <div className="flex justify-center">
        <div className="w-32">
          <img src={LogoPortify} />
        </div>
      </div>
      {/* <!-- Login --> */}
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          gender: "",
          passwordConfirmation: "",
          dob: new Date(),
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setFieldError }) => {
          var newvalue = {
            ...values,
            dob: `${values.dob.toISOString().substr(0, 10)}`,
          };
          dispatch(setLoading(true));
          register(newvalue).then((result) => {
            localStorage.setItem("emailRegister", newvalue.email);
            localStorage.setItem("password", newvalue.password);
            //if register is successful
            if (result.status === 200) {
              dispatch(setLoading(false));
              dispatch(setPopup("verify"));
            } else if (result.response.data.title == "Existing Email") {
              dispatch(setLoading(false));
              setFieldError("email", "Email already existing");
            }
          });
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <div className="">
            {/* <!-- Login box --> */}
            <div className="flex flex-1 flex-col justify-center w-full">
              {/* title: create acc */}
              <div className="text-lg py-3 text-gray-600 text-center font-bold font-MainFont">
                Create Account
              </div>
              <Form
                className="flex flex-col w-full space-y-4 font-SecondaryFont"
                onChange={handleInput}
              >
                {/* Full Name */}
                <div className="flex text-gray-500 flex-nowrap flex-col justify-between gap-2">
                  <label
                    htmlFor="fullName"
                    className="font-semibold text-md text-left"
                  >
                    Full name
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full h-10 pl-3 pr-10  border-1 border-green_custom rounded-[20px] font-medium placeholder:font-normal focus:drop-shadow-md  focus:outline-none focus:ring-2 focus:ring-green_custom focus:border-transparent"
                    />
                    <span className="absolute top-0 right-0 bottom-0 flex items-center pr-3">
                      <FiUser className="w-6 h-6 text-gray-400" />
                    </span>
                  </div>
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Email */}
                <div className="w-[100%] relative gap-2">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-500 text-md text-left"
                  >
                    Email
                  </label>
                  <div className="relative mt-2">
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      className="flex w-full h-10 px-3 py-2 md:px-4 md:py-3 border-1 border-green_custom rounded-[20px] font-medium placeholder:font-normal pr-10 focus:outline-none focus:ring-2 focus:drop-shadow-md  focus:ring-green_custom focus:border-transparent"
                    />
                    <span className="absolute top-0 right-0 bottom-0 flex items-center pr-3 pointer-events-none">
                      <FiMail className="w-6 h-6 text-gray-400" />
                    </span>
                  </div>
                  <div>
                    {errors.email && touched.email ? (
                      <div className="text-red-500">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="md:flex justify-between gap-6">
                  {/* Date of Birth */}
                  <div className="w-full md:w-[50%] relative">
                    <label
                      htmlFor="dob"
                      className="font-semibold text-gray-500 text-md text-left"
                    >
                      Date of Birth
                    </label>
                    <div className="relative mt-2">
                      <DatePicker
                        name="dob"
                        id="dob"
                        yearDropdownItemNumber={100}
                        scrollableYearDropdown={true}
                        showYearDropdown={true}
                        selected={values.dob}
                        maxDate={new Date()}
                        dateFormat="MMMM d, yyyy"
                        className="flex w-full h-10 px-3 py-2 md:px-4 md:py-3 border-1 border-green_custom rounded-[20px] focus:drop-shadow-md  font-medium placeholder:font-normal pr-10 focus:outline-none focus:ring-2 focus:ring-green_custom focus:border-transparent"
                        onChange={(date) => setFieldValue("dob", date)}
                      />
                      <span className="absolute top-0 right-0 bottom-0 flex items-center pr-3 pointer-events-none">
                        <FiCalendar className="w-6 h-6 text-gray-400" />
                      </span>
                    </div>
                  </div>
                  {errors.dob && touched.dob ? (
                    <div className="text-red-500">{errors.dob}</div>
                  ) : null}
                  <div className="w-full md:w-[50%] flex flex-nowrap flex-col justify-start gap-4 md:mt-0 mt-6">
                    <label
                      htmlFor="gender"
                      className="font-semibold text-gray-500 text-md text-left"
                    >
                      Gender
                    </label>
                    <div className="flex items-center">
                      <div role="group" aria-labelledby="my-radio-group">
                        <label>
                          <Field
                            type="radio"
                            value="male"
                            name="gender"
                            className="w-4 h-4 text-green_custom focus:drop-shadow-md  bg-gray-100 border-gray-300 focus:ring-green_custom"
                          />{" "}
                          Male
                        </label>
                        <label>
                          <Field
                            type="radio"
                            value="female"
                            name="gender"
                            className="w-4 h-4 text-green_custom focus:drop-shadow-md  bg-gray-100 border-gray-300 focus:ring-green_custom ml-2 md:ml-5"
                          />{" "}
                          Female
                        </label>
                      </div>
                    </div>
                    <ErrorMessage name="gender" component="div" className="text-red-500" />
                  </div>
                </div>
                {/* Password */}

                <div className="md:flex flex-nowrap justify-between gap-6">
                  <div className="w-full md:w-[50%]">
                    <label
                      htmlFor="password"
                      className=" font-semibold text-gray-500 text-md text-left"
                    >
                      Password
                    </label>
                    <div className="relative inline-flex items-center w-full mt-2">
                      <Field
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="flex w-full h-10  px-3 py-2 md:px-4 md:py-3 border-1 border-green_custom rounded-[20px] font-medium placeholder:font-normal focus:outline-none focus:drop-shadow-md  focus:ring-2 focus:ring-green_custom focus:border-transparent"
                      />

                      {user.password && (
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 top-4 right-0 flex items-center pr-3 text-gray-700 cursor-pointer"
                        />
                      )}
                    </div>
                    {errors.password && touched.password ? (
                      <div className="text-red-500">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full md:w-[50%] mt-6 md:mt-0">
                    <label
                      htmlFor="passwordConfirmation"
                      className="font-semibold text-gray-500 text-md text-left"
                    >
                      Confirm Password
                    </label>
                    <div className="relative inline-flex items-center w-full mt-2">
                      <Field
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="passwordConfirmation"
                        id="passwordConfirmation"
                        className="flex w-full h-10  px-3 py-2 md:px-4 md:py-3 border-1 border-green_custom focus:drop-shadow-md  rounded-[20px] font-medium placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-green_custom focus:border-transparent"
                      />

                      {user.password && (
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 top-4 right-0 flex items-center pr-3 text-gray-700 cursor-pointer"
                        />
                      )}
                    </div>
                    {errors.passwordConfirmation &&
                    touched.passwordConfirmation ? (
                      <div className="text-red-500">
                        {errors.passwordConfirmation}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=" flex w-full justify-between">
                  <button
                    type="submit"
                    className={`w-[100%] h-12 font-normal flex items-center justify-center flex-none px-3 py-2 border-2 rounded-[20px] text-white hover:bg-hover_green_custom mb-2 ${GreenBackGround}`}
                  >
                    {Loading ? <LoadingComponentBtn /> : "Create Account"}
                  </button>
                  {/* Google login session */}
                </div>
              </Form>
              <GoogleSignup></GoogleSignup>
            </div>
          </div>
        )}
      </Formik>
      {/* Already have an acc? Log in */}
      <div className="flex justify-center items-center">
        {" "}
        Already have an account?&nbsp;{" "}
        <button
          className=" text-green_custom"
          onClick={() => {
            dispatch(setPopup("login"));
          }}
        >
          {" "}
          Log In
        </button>
      </div>
    </div>
  );
}
