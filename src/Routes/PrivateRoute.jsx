import React, { useContext } from 'react';
import { UserContext } from '../AuthProviders/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(UserContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <Loading></Loading>
    }

   if(user){
    return children;
   }

    return (
        <Navigate state={{from : location}} to ="/login"  replace ></Navigate>
    )

};

export default PrivateRoute;