import { Navigate } from "react-router-dom"
import React, { useEffect } from "react"
import { useSelector } from "react-redux";


const ProtectedUserCompany = ({children,role}) => {
    if(role==="company" || role==="user"){
        return children;
    }else{
    <Navigate to='' replace />
    }
}
export default ProtectedUserCompany


// const Protected = ({ children }) => {
// //   const navigate = useNavigate();
//   const userDetails = useSelector(state => state.userDetail.userDetail)
//     console.log(userDetails)
// //   useEffect(() => {
// //     if (!localStorage.getItem("Token")) {
// //       // Redirect to the login page if the token is not present
// //       navigateToLogin();
// //     }
// //   }, []);

// //   const navigateToLogin = () => {
// //     // Use the 'useNavigate' hook from 'react-router-dom' to navigate to the login page
// //     navigate("/login", { replace: true });
// //   };

//   // Render the children if the token is present
//   return userDetails.role==="user" ? children :  <Navigate to='/' replace />;
// };

// export default Protected;
