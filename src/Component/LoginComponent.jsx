import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import loginImage from "../assets/Tablet_login-bro_1.svg";
import logo from "../assets/Portify_logo.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { loginService, register } from "../Redux/service/login.service";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

// Formik login schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, {
      message: "Please insert a valid email address.",
    })
    .required("Email can't empty"),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
      message:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
    })
    .required("Password can't empty"),
});

export default function LoginComponent() {
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
  const handleLogin = () => {
    loginService(user).then((r) => {
      if (r.status === 200) {
        navigate("/home");
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
  };

  return (
    <div>
      <div className="bg-white">
        {/* <!-- Example --> */}
        <div className="flex min-h-screen">
          <div className="flex flex-col w-full">
            <div className="flex m-5 ml-16">
              <img src={logo} alt="logo" />
            </div>
            {/* <!-- Container --> */}
            <div className="flex flex-row w-full">
              {/* <!-- Sidebar --> */}
              <div className="hidden lg:flex flex-col justify-between m-5 ml-20 lg:ml-20 xl:ml-36 lg:p-8 xl:p-12 lg:max-w-xl xl:max-w-5xl">
                <img src={loginImage} alt="image" />
              </div>

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
                  <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                    {/* <!-- Login box --> */}
                    <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                      <div className="flex flex-col space-y-2 text-center text-3xl md:text-4xl font-bold mb-14">
                        <h1>Welcome to your</h1>
                        <h1>professional community</h1>
                      </div>

                      <Form
                        className="flex flex-col max-w-md space-y-5"
                        onChange={handleInput}
                      >
                        {/* Email and Phone */}
                        <label
                          htmlFor="email"
                          className="font-semibold text-lg text-left ml-2"
                        >
                          Email
                        </label>
                        <Field
                          type="text"
                          placeholder="Email "
                          name="email"
                          id="email"
                          className="flex w-full px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-[20px] font-medium placeholder:font-normal"
                        />
                        {errors.email && touched.email ? (
                          <div className="text-red-500">{errors.email}</div>
                        ) : null}

                        {/* Password */}
                        <label
                          htmlFor="password"
                          className=" font-semibold text-lg text-left ml-2"
                        >
                          Password
                        </label>
                        <div className="relative inline-flex items-center w-20">
                          <Field
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            id="password"
                            className="flex w-full px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-[20px] font-medium placeholder:font-normal"
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
                          <div className="text-red-500 w-18">{errors.password}</div>
                        ) : null}

                        <a
                          href="#"
                          className="text-blue-500 font-medium text-left ml-2"
                        >
                          Forgot password?
                        </a>

                        <button
                          type="submit"
                          className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[20px] border-gray-500 bg-primary text-white"
                        >
                          Sign up
                        </button>
                      </Form>

                      <div className="flex justify-center items-center">
                        <span className="w-full border border-gray-200"></span>
                        <span className="px-4">OR</span>
                        <span className="w-full border border-gray-200"></span>
                      </div>

                      {/* Google login session */}
                      <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[20px] font-medium border-black relative"
                      >
                        {/* Google Icon */}
                        <span className="absolute left-4">
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path
                              fill="#EA4335 "
                              d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                            />
                            <path
                              fill="#34A853"
                              d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                            />
                            <path
                              fill="#4A90E2"
                              d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                            />
                          </svg>
                        </span>
                        <span>Sign in with Google</span>
                      </button>

                      {/*  Register session  */}
                      <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[20px] font-medium border-black relative">
                        New to Portify? Join Now!
                      </button>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
