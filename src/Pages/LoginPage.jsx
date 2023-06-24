import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import loginImage from "../assets/Tablet_login-bro_1.svg";
import logo from "../assets/Portify_logo.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginService, register } from "../Redux/service/login.service";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { StaticImage } from "../utils/StaticImage";
import { logoLink } from "../utils/Constant";
import LinkComponent from "../Component/othersComponent/LinkComponent";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../Redux/slices/PopupSlice";
import logoportify from "../assets/LogoPortify.png";
import { DropShadow } from "../utils/Style";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import LoadingComponent from "../Component/othersComponent/LoadingComponent";
import { setLoading } from "../Redux/slices/LoadingSlice";
import LoadingComponentBtn from "../Component/othersComponent/LoadingComponentBtn";
import GoogleSignup from "../Component/othersComponent/GoogleSignup";

// Formik login schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, {
      message: "Please insert a valid email address.",
    })
    .required("Email can't empty"),
  password: Yup.string().required("Password can't empty"),
});

export default function LoginPage() {
  const Loading = useSelector((state) => state.loading.value);
  const close = useRef();
  const dispatch = useDispatch();
  //used to navigate routes
  const navigate = useNavigate();

  //show or hidden password field
  const [showPassword, setShowPassword] = useState(false);

  //user
  const [user, setUser] = useState({});

  //toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //handle user input
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //handle fomr login
  const handleLogin = (values, { setFieldError }) => {
    dispatch(setLoading(true));
    loginService(user).then((r) => {
      localStorage.setItem("emailRegister", values.email);
      console.log(r);
      if (r.status === 200) {
        dispatch(setLoading(false));
        window.location.reload();     
        close.current.click();
      } else if (r.response.data?.title === "Password incorrect") {
        dispatch(setLoading(false));
        setFieldError("password", "Password incorrect");
      } else if (r.response.data?.title === "Email not found") {
        dispatch(setLoading(false));
        setFieldError("email", "Email not exist");
      } else if (r.response.data?.title === "USER_DISABLED") {
        dispatch(setLoading(false));
        dispatch(setPopup("verify"));
      }else{
        dispatch(setLoading(false));
      }
    });
  };
  

  //handle google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      //google user
      const googleUser = {
        email: result.user.email,
        password: result.user.uid,
      };

      register(googleUser).then((result) => {
        //if register is successful
        if (result.status === 200) {
          loginService(googleUser).then((r) => {
            if (r.status === 200) {
              navigate("/home");
            }
          });
        }

        //if register is unsuccessful because of user already registered
        if (result.response.data.title === "Existing User") {
          loginService(googleUser).then((r) => {
            if (r.status === 200) {
              navigate("/home");
            }
          });
        }
      });
    });
    // .catch(error => {console.log(error)});
  };

  return (
    <div className="flex flex-col bg-white rounded-[20px] p-4 md:p-6 w-[320px] xs:w-[375px] sm:w-[500px] md:w-[700px]">
      {/* logo */}
      <div className="flex justify-center">
        <img className="w-32" src={logoportify}/>
      </div>
      {/* title: sign in */}
      <div className="text-xl text-center font-bold font-MainFont text-gray-600 py-3">
        Sign In
      </div>
      {/* <!-- Container --> */}
      <div className="flex flex-row">
        {/* <!-- Sidebar --> */}
        {/* <div className="hidden lg:flex flex-col justify-between m-5 ml-20 lg:ml-20 xl:ml-36 lg:p-8 xl:p-12 lg:max-w-xl xl:max-w-5xl">
          <img src={loginImage} alt="image" />
        </div> */}
        {/* <!-- Login --> */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <div className="flex flex-1 flex-col items-center justify-center relative">
              {/* <!-- Login box --> */}
              <div className="flex flex-1 flex-col  justify-center space-y-5 w-full">
                <Form
                  className="flex flex-col space-y-2 font-SecondaryFont"
                  onChange={handleInput}
                >
                  {/* Email and Phone */}
                  <label
                    htmlFor="email"
                    className="font-semibold text-lg text-left text-gray-500"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      style={{
                        ':focus': {
                          border:'2',
                          borderColor: 'green',
                        }
                      }}
                      placeholder="example@gmail.com"
                      name="email"
                      id="email"
                      className={`input-field w-full focus:rounded-[20px] rounded-[20px] focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md  focus:border-b-green_custom   focus:ring-0 focus:border-transparent  ${
                        touched.email && errors.email ? "input-error rounded-[20px] focus:border-b-0" : ""
                      }  
                      }`}
                    />
                    <AiOutlineMail
                      className="text-gray-500 absolute right-3 top-5 transform -translate-y-1/2"
                      size={20}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 ml-3 text-sm mt-2">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>
                  {/* Password */}
                  <label
                    htmlFor="password"
                    className=" font-semibold text-lg text-left text-gray-500"
                  >
                    Password
                  </label>
                  <div className="relative inline-flex items-center w-full">
                    <Field
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      id="password"
                      className={`input-field border-2 w-full focus:rounded-[20px] rounded-[20px]   focus:outline-b-green_custom focus:border-2 focus:drop-shadow-md focus:border-b-green_custom   focus:ring-0 focus:border-transparent  ${
                        touched.password && errors.password
                          ? "input-error  rounded-[20px] focus:border-b-0"
                          : ""
                      }`}
                    />

                    {user.password && (
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 top-4    right-0 flex items-center pr-3 text-gray-700 cursor-pointer"
                      />
                    )}
                  </div>
                  {errors.password && touched.password ? (
                    <div className="text-red-500 w-[27rem] ml-3 text-sm">
                      {errors.password}
                    </div>
                  ) : null}
                  <a
                    
                    onClick={() => {
                      dispatch(setPopup("sendOTP"));
                    }}
                    className=" text-green_custom font-medium text-left ml-2"
                  >
                    Forgot password?
                  </a>

                  <button
                    type="submit"
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[20px]  bg-green_custom text-white h-14"
                  >
                    {Loading ? <LoadingComponentBtn /> : "Sign in"}
                  </button>
                </Form>

                <div className="flex justify-center items-center">
                  <span className="w-full border border-gray-200"></span>
                  <span className="px-4">OR</span>
                  <span className="w-full border border-gray-200"></span>
                </div>

                {/* Google login session */}
                <GoogleSignup>  </GoogleSignup>

                {/*  Register session  */}
                <button
                  onClick={() => dispatch(setPopup("register"))}
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[20px] font-medium  border-green_custom relative"
                >
                  {" "}
                  New to Portify? &nbsp;
                  <span className=" text-green_custom">Join Now!</span>
                </button>
              </div>
            </div>
          )}
        </Formik>
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
