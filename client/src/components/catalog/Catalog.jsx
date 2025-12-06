import { useEffect } from "react";

const cars = [
    {
        id: 1,
        name: "Ferrari SF90 Stradale",
        year: 2023,
        type: "Hybrid Supercar",
        produced: 500,
        img: "/images/car1.jpg",
    },
    {
        id: 2,
        name: "Porsche 911 Turbo S",
        year: 2024,
        type: "Sports",
        produced: 800,
        img: "/images/car2.jpg",
    },
    {
        id: 3,
        name: "Lamborghini Revuelto",
        year: 2023,
        type: "Hybrid V12",
        produced: 250,
        img: "/images/car3.jpg",
    },
];


export default function Catalog() {
    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games')
            .then(res => res.json())
            .then((mu) => console.log(mu))
    }, [])

    return (
        <div className="min-h-screen bg-black text-white pt-32 px-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold tracking-wider mb-10">
                    Exclusive Collection
                </h1>

                <div className="grid grid-cols-3 gap-10">

                    {cars.map((car) => (
                        <div
                            key={car.id}
                            className="border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm bg-black/30"
                        >
                            <img src={car.img} className="w-full h-48 object-cover" />

                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-2">{car.name}</h2>
                                <p className="text-white/70 mb-2">{car.year} · {car.type}</p>
                                <p className="text-white/50 mb-4">Produced: {car.produced}</p>

                                <button
                                    className="w-full border border-white/30 text-white py-2 rounded-lg
                             hover:bg-white hover:text-black transition-all duration-200"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
