
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

export default function Details() {
    const { carId } = useParams();
    console.log(carId);
    const [car,setCar] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/games/${carId}`)
        .then(res => res.json())
        .then(result => setCar(result))
        .catch(err => alert(err.messagee))
    },[carId])

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
                        <Link
                            to={`/cars/${car.id}/edit`}
                            className="px-7 py-3 border border-white text-white rounded-xl text-lg transition duration-200
                                       hover:bg-white hover:text-black hover:scale-105"
                        >
                            Edit
                        </Link>

                        <button
                            className="px-7 py-3 border border-red-500 text-red-400 rounded-xl text-lg transition duration-200
                                       hover:bg-red-600 hover:text-white hover:scale-105"
                        >
                            Delete
                        </button>

                        <Link
                            to="/cars"
                            className="px-7 py-3 border border-gray-400 text-gray-300 rounded-xl text-lg transition duration-200
                                       hover:bg-gray-400 hover:text-black hover:scale-105"
                        >
                            Back to Catalog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


