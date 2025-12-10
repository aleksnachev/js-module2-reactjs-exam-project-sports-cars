import { Link } from "react-router";

export default function CarCardCatalog({
    car
}) {
    return (
        <div
            className="border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm bg-black/30"
        >
            <img src={car.imageUrl} className="w-full h-48 object-cover" />

            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{car.name}</h2>
                <p className="text-white/70 mb-2">{car.date} · {car.type}</p>
                <p className="text-white/50 mb-4">Produced: {car.produced}</p>

                <Link to={`/cars/${car._id}/details`}
                    className="w-full border border-white/30 text-white py-2 rounded-lg
                             hover:bg-white hover:text-black transition-all duration-200"
                >
                    Details
                </Link>
            </div>
        </div>
    )
}