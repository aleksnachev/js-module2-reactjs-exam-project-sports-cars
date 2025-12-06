export default function AddCar() {

    const addCarAction = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        //TODO: Validation
        const data = Object.fromEntries(formData)
        data._createdOn = Date.now()
        
        const response = await fetch('http://localhost:3030/jsonstore/games', {
            method: 'POST',
            headers: {
                'content-type': 'apllication/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result);

    }
    return (
        <div className="min-h-screen bg-black pt-32 px-6 flex justify-center">
            <div className="w-full max-w-2xl border border-white/20 bg-black/40 backdrop-blur-md rounded-xl p-10">

                <h1 className="text-white text-4xl font-semibold mb-10 tracking-wide text-center">
                    Add a New Luxury Car
                </h1>

                <form className="flex flex-col gap-7" onSubmit={addCarAction}>

                    {/* Car Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Car Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Ferrari SF90 Stradale"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            name="name"
                        />
                    </div>

                    {/* Type */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Type</label>
                        <input
                            type="text"
                            placeholder="e.g. Sports, Hypercar, GT"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            name="type"
                        />
                    </div>

                    {/* Units Produced */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Units Produced</label>
                        <input
                            type="number"
                            placeholder="e.g. 500"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            name="produced"
                        />
                    </div>

                    {/* Year of Manufacture */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Year of Manufacture</label>
                        <input
                            type="number"
                            placeholder="e.g. 2024"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            name="date"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Image URL</label>
                        <input
                            type="text"
                            placeholder="Paste image URL here"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            name="imageUrl"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Description</label>
                        <textarea
                            rows="5"
                            placeholder="Write a detailed description..."
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40 resize-none"
                            name="description"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full border border-white/40 text-white py-3 rounded-lg mt-4 hover:bg-white hover:text-black transition-all tracking-wide text-lg">
                        Add Car
                    </button>

                </form>
            </div>
        </div>
    );
}
