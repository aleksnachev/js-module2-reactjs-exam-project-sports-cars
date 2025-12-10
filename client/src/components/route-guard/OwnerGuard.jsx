import { useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";
import useRequest from "../../hooks/useRequest.js";

export default function OwnerGuard() {
    const { user } = useContext(UserContext);
    const { carId } = useParams();
    const { data: car } = useRequest(`/data/cars/${carId}`, [])
    

    if (!(car._ownerId === user?._id)) {
        alert('You have no permission to edit this car')
        return <Navigate to="/cars"/>;
    }

    return <Outlet />;
}
