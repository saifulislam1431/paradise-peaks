import React, { useContext } from 'react';
import { UserContext } from '../AuthProviders/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(UserContext);
    const location = useLocation();
    console.log(location);

   if(user){
    return children;
   }

    return (
        <Navigate state={{from : location}} to ="/login"  replace ></Navigate>
    )

};

export default PrivateRoute;