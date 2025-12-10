
import { useContext, useOptimistic } from "react";
import { useParams, Link, useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";
import useRequest from "../../hooks/useRequest.js";
import DetailsComments from "./details-comments/DetailsComments.jsx";
import CreateComment from "./create-comment/CreateComments.jsx";

export default function Details() {
    const { user, isAuthenticated } = useContext(UserContext)
    const navigate = useNavigate()
    const { carId } = useParams();
    const { data: car, request } = useRequest(`/data/cars/${carId}`, [])

    const urlParams = new URLSearchParams({
        where: `carId="${carId}"`,
        load: 'author=_ownerId:users'
    })

    const { data: comments, setData: setComments } = useRequest(`/data/comments?${urlParams.toString()}`, [])
    const [optimisticComments, dispatchOptimisticComments] = useOptimistic(comments, (state, action) => {
        switch (action.type) {
            case 'ADD-COMMENT':
                return [...state, action.payload]
            default:
                return state
        }
    })
    const deleteCarHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete game: ${car.title}`)

        if (!isConfirmed) {
            return
        }

        try {
            await request(`/data/cars/${carId}`, 'DELETE')

            navigate('/cars')
        } catch (err) {
            alert('Unable to delete car: ', err.message)
        }
    }

    const createEndCommentHandler = (createdComment) => {
        setComments(prevComments => [...prevComments, { ...createdComment, author: user }])
    }

    const createStartCommmentHandler = (newComment) => {
        dispatchOptimisticComments({ type: 'ADD_COMMENT', payload: { ...newComment, author: user, pending: true } })
    }
    

    return (
        <div className="min-h-screen bg-black text-white px-10 py-10 flex justify-center">
            <div className="max-w-6xl w-full border border-white/20 p-10 rounded-2xl shadow-2xl bg-gradient-to-b from-black to-gray-900">

                {/* IMAGE */}
                <div className="w-full">
                    <img
                        src={car.imageUrl}
                        alt={car.name}
                        className="w-full rounded-xl border border-white/10 shadow-xl"
                    />
                </div>

                {/* CONTENT */}
                <div className="mt-10 flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold tracking-wide uppercase">
                        {car.name}
                    </h1>

                    <div className="grid grid-cols-2 gap-6 text-lg">
                        <p><span className="font-bold">Type:</span> {car.type}</p>
                        <p><span className="font-bold">Produced:</span> {car.produced}</p>
                        <p><span className="font-bold">Year:</span> {car.date}</p>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-xl">
                        {car.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-5 mt-10">
                    {user._id === car._ownerId && (
                        <>
                        <Link
                            to={`/cars/${carId}/edit`}
                            className="px-7 py-3 border border-white text-white rounded-xl text-lg transition duration-200
                                       hover:bg-white hover:text-black hover:scale-105"
                        >
                            Edit
                        </Link>

                        <button
                            className="px-7 py-3 border border-red-500 text-red-400 rounded-xl text-lg transition duration-200
                                       hover:bg-red-600 hover:text-white hover:scale-105"
                            onClick={deleteCarHandler}
                        >
                            Delete
                        </button>
                        </>
                    )}
                        <Link
                            to="/cars"
                            className="px-7 py-3 border border-gray-400 text-gray-300 rounded-xl text-lg transition duration-200
                                       hover:bg-gray-400 hover:text-black hover:scale-105"
                        >
                            Back to Catalog
                        </Link>
                    </div>
                    <DetailsComments comments={optimisticComments}/>
                    {isAuthenticated && <CreateComment user={user} onCreateStart={createStartCommmentHandler} onCreateEnd={createEndCommentHandler}/>}
                </div>
            </div>
        </div>
    );
}


