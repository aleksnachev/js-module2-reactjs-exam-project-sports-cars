import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";

export default function RouteGuard(){

    const {isAuthenticated} = useContext(UserContext)
    if (!isAuthenticated){
        return <Navigate to="/login"/>
    }

    return <Outlet/>
}