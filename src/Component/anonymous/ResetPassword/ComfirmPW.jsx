import React, { useState } from "react";
import { StaticImage } from "../../../utils/StaticImage";
import { ResetPassword } from "../../../Redux/service/Register_Service";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../../Redux/slices/PopupSlice";
import { setLoading } from "../../../Redux/slices/LoadingSlice";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponentBtn from "../../othersComponent/LoadingComponentBtn";

export default function ComfirmPW() {
  const Loading = useSelector((state) => state.loading.value);
  const [password, setPassword] = useState({});
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };
  
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter and    one number"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    let timeOut;
    dispatch(setLoading(true));
    ResetPassword(values).then(() => {
      timeOut =setTimeout(function () {
        dispatch(setLoading(false));
        dispatch(setPopup("login"))
      },4000);
      }, );;
      
  };

  const formik = useFormik({
    initialValues: {
      // Add your initial values here
      // For example:
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      // Add your validation schema here
      // For example:
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      // Add your submit logic here
      // For example:
      // Call your submit function or API request here
    },
  });

  return (
    <div>
      <div className="flex flex-wrap flex-col justify-center items-center bg-white py-5 md:py-20  h-auto rounded-3xl border-2 border-accent">
        <img src={StaticImage.Logo} className="w-[128px]"></img>
        <div className="font-semibold mt-0 md:mt-5 px-32 text-center">
          Your password must be at least six characters and should include a
          combination of numbers.
        </div>

        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="mt-0 md:mt-6" onChange={handleInput}>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="password">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={`w-[320px] h-[45px] rounded-[20px] border-2 border-green_custom ${
                  formik.touched.password && formik.errors.password
                    ? "input-error"
                    : ""
                }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message text-red-500  text-xs"
              />

              <label className="label" htmlFor="confirmPassword">
                Re-Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter your password"
                className={`w-[320px] h-[45px] rounded-[20px] border-2 border-green_custom ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "input-error"
                    : ""
                }`}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message text-red-500 text-sm"
              />
            </div>

            <div className="mt-10 md:mt-6">
              <button
                className="w-[320px] bg-green_custom font-semibold  text-white rounded-[20px] p-0 md:px-12 py-2"
                disabled={!formik.isValid || formik.isSubmitting}
                type="submit"
              >
                {Loading ? <LoadingComponentBtn /> : "Confirm"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
