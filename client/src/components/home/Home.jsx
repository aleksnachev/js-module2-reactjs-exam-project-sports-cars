import { useEffect, useState } from "react"

export default function Home() {
    const [latestCars, setLatestCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games')
            .then(res => res.json())
            .then(cars => {
                const resultCars = Object.values(cars)
                    .sort((a, b) => b._createdOn - a._createdOn)
                    .slice(0, 3)
                setLatestCars(resultCars)
            })
            .catch(err => alert(err.message))
    }, [])
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat pt-32 px-10"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
            <div className="max-w-7xl mx-auto flex justify-between gap-12">

                {/* LEFT SIDE – LUXURY TEXT */}
                <div className="w-1/2 text-white">
                    <h1 className="text-6xl font-semibold tracking-wider mb-8">
                        Where Power Meets
                        <span className="block text-white/70 mt-2">Timeless Luxury.</span>
                    </h1>

                    <p className="text-xl text-white/80 leading-relaxed">
                        Explore a curated collection of the world’s most exclusive
                        sports cars. Precision engineering, timeless elegance, and
                        unrivaled performance — crafted for those who expect more.
                    </p>
                </div>

                {/* RIGHT SIDE – LAST 3 CARS */}
                <div className="w-1/2 flex flex-col gap-6">

                    <div className="border border-white/20 rounded-xl p-6 backdrop-blur-sm bg-black/30">
                        <h2 className="text-white text-2xl font-semibold mb-4 tracking-wider">
                            Latest Additions
                        </h2>

                        <div className="flex flex-col gap-5">
                            {latestCars.length === 0 && <p>No cars added yet</p>}
                            {latestCars.map(car => (<div className="border border-white/20 rounded-lg p-4 flex gap-4 bg-black/20">
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
                            </div>))}

                            {/* Car 1 */}
                            <div className="border border-white/20 rounded-lg p-4 flex gap-4 bg-black/20">
                                <img src="/images/car1.jpg" className="w-32 h-20 object-cover rounded" />
                                <div className="text-white flex flex-col justify-between w-full">
                                    <div>
                                        <p className="text-lg font-semibold">Ferrari SF90 Stradale</p>
                                        <p className="text-white/60 text-sm">2023 · Hybrid · 500 units</p>
                                    </div>

                                    <button className="border border-white/30 text-white py-1 rounded-lg hover:bg-white hover:text-black transition-all">
                                        Details
                                    </button>
                                </div>
                            </div>

                            {/* Car 2 */}
                            <div className="border border-white/20 rounded-lg p-4 flex gap-4 bg-black/20">
                                <img src="/images/car2.jpg" className="w-32 h-20 object-cover rounded" />
                                <div className="text-white flex flex-col justify-between w-full">
                                    <div>
                                        <p className="text-lg font-semibold">Porsche 911 Turbo S</p>
                                        <p className="text-white/60 text-sm">2024 · Sports · 800 units</p>
                                    </div>

                                    <button className="border border-white/30 text-white py-1 rounded-lg hover:bg-white hover:text-black transition-all">
                                        Details
                                    </button>
                                </div>
                            </div>

                            {/* Car 3 */}
                            <div className="border border-white/20 rounded-lg p-4 flex gap-4 bg-black/20">
                                <img src="/images/car3.jpg" className="w-32 h-20 object-cover rounded" />
                                <div className="text-white flex flex-col justify-between w-full">
                                    <div>
                                        <p className="text-lg font-semibold">Lamborghini Revuelto</p>
                                        <p className="text-white/60 text-sm">2023 · Hybrid V12 · 250 units</p>
                                    </div>

                                    <button className="border border-white/30 text-white py-1 rounded-lg hover:bg-white hover:text-black transition-all">
                                        Details
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


