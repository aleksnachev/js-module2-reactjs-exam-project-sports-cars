import CarCardCatalog from "../car-card/CarCardCatalog.jsx";
import useRequest from "../../hooks/useRequest.js";

export default function Catalog() {
    const {data: cars} = useRequest('/data/cars', [])
    
    return (
        <div className="min-h-screen bg-black text-white pt-32 px-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-semibold tracking-wider mb-10">
                    Exclusive Collection
                </h1>

                <div className="grid grid-cols-3 gap-10">
                    {cars.length === 0 && <p>No cars added yet</p>}
                    {cars.map((car) => <CarCardCatalog car={car} key={car._id}/>)}

                </div>
            </div>
        </div>
    );
}
