import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { StaticImage } from "./StaticImage";
import React from "react";
import axios from "axios";

export function CleanCookies() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
  }
}

// const handleHomeClick = () => {
//   window.location.reload();
// };

export const logoLink = (
  <Link  to={localStorage.getItem("userRole")=="user"?"/home":"/company"}>
    <img src={StaticImage.Logosvg}></img>{" "}
  </Link>
);

export const loginSchema = Yup.object().shape({
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

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name can't empty"),
  // dateOfBirth: Yup.date().required(),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, {
      message: "Please insert a valid email address.",
    })
    .required("Email can't empty"),
  // gender: Yup.boolean().oneOf([true], 'Message'),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
      message:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
    })
    .required("Password can't empty"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.string().required("Gender is required")
  
  // agreement: Yup.boolean().oneOf([true], 'Message')
});


export const salaryConstant = {"201 - 400":"$201 To $400","401 - 600":"$401 To $600","601 - 800":"$601 To $800","801 - 1000":"$801 To $1000",
"0 - 0":"Salary Negotiable","1001 - UP":"$1001 UP"}

export const salaryConstantvlue = {"201 - 400":"$201_TO_400","401 - 600":"$401_T0_600","601 - 800":"$601_TO_800","801 - 1000":"$801_TO_1000",
"0 - 0":"$0_TO_0","1001 - UP":"$1001_UP"}




