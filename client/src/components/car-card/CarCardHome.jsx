export default function CarCardHome({
    car
}) {
    return (
        <div className="border border-white/20 rounded-lg p-4 flex gap-4 bg-black/20">
            <img src="/images/car1.jpg" className="w-32 h-20 object-cover rounded" />
            <div className="text-white flex flex-col justify-between w-full">
                <div>
                    <p className="text-lg font-semibold">{car.name}</p>
                    <p className="text-white/60 text-sm">{car.date} · {car.type} · {car.produced} units</p>
                </div>

                <button className="border border-white/30 text-white py-1 rounded-lg hover:bg-white hover:text-black transition-all">
                    Details
                </button>
            </div>
        </div>
    )
}