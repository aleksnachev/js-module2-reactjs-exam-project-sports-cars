import useRequest from "../../hooks/useRequest.js"
import CarCardHome from "../car-card/CarCardHome.jsx"

export default function Home() {
    // const [latestCars, setLatestCars] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3030/jsonstore/games')
    //         .then(res => res.json())
    //         .then(cars => {
    //             const resultCars = Object.values(cars)
    //                 .sort((a, b) => b._createdOn - a._createdOn)
    //                 .slice(0, 3)
    //             setLatestCars(resultCars)
    //         })
    //         .catch(err => alert(err.message))
    // }, [])

    const { data: latestCars } = useRequest(`/data/cars?sortBy=_createdOn%20desc&pageSize=3`, [])
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat pt-32 px-10"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
            <div className="max-w-7xl mx-auto flex justify-between gap-12">

                {/* LEFT SIDE – LUXURY TEXT */}
                <div className="w-1/2 text-white">
                    <h1 className="text-5xl font-bold text-black tracking-wide mb-6">
                        Discover the World of Luxury Cars
                    </h1>

                    <p className="text-lg text-black/80 leading-relaxed max-w-3xl mx-auto">
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
                            {latestCars.map(car => (<CarCardHome car={car} key={car._id} />))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


