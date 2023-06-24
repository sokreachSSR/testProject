import { Navigate } from "react-router-dom"
import React, { useEffect } from "react"
import { useSelector } from "react-redux";


const ProtectedCompany = ({children,role}) => {
    if(role=="company"){
        return children;
    }else if(role=="user"){
        return <Navigate to='/home' replace />
    }else{
        return <Navigate to='/' replace />
    }
}
export default ProtectedCompany


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
