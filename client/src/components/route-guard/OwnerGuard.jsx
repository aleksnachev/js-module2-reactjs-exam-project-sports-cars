// import { useContext } from "react";
// import { Navigate, Outlet, useParams } from "react-router";
// import UserContext from "../../contexts/UserContext.jsx";
// import useRequest from "../../hooks/useRequest.js";

// export default function OwnerGuard() {
//     const { user } = useContext(UserContext);
//     const { carId } = useParams();
//     const { data: car } = useRequest(`/data/cars/${carId}`, [])


//     if (!(car._ownerId === user?._id)) {
//         alert('You have no permission to edit this car')
//         return <Navigate to="/cars"/>;
//     }

//     return <Outlet />;
// }

import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";

export default function OwnerGuard() {
    const { user } = useContext(UserContext);
    const { carId } = useParams();
    const [isOwner, setIsOwner] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3030/data/cars/${carId}`)
            .then(res => res.json())
            .then(car => {
            setIsOwner(car._ownerId === user?._id);
        });
    }, [carId, user?._id]);

    // still loading
    if (isOwner === null) {
        return <div className="text-center text-xl p-8">Loading…</div>;
    }

    if (!isOwner) {
        return <Navigate to="/cars" />;
    }

    return <Outlet />;
}

