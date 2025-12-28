import React from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = ({publicPage=false}) => {
    const {user} = useSelector((state) => state.auth);
    // console.log("User:", user);
    if(publicPage){
        // console.log("Public Page Access and: ", user);
        return user ? <Navigate to="/" />: <Outlet />
    }
    // console.log("Private Page Access");
    return user? <Outlet />: <Navigate to="/" />
}

export default PrivateRoute;