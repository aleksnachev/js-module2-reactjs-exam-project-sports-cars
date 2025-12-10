import { useNavigate } from "react-router";
import useRequest from "../../hooks/useRequest.js";
import useForm from "../../hooks/useForm.js";
import { useState } from "react";

export default function AddCar() {
    const navigate = useNavigate()
    const { request } = useRequest()

    const [error, setError] = useState("");

    const createCarHandler = async (values) => {
        setError("")
        const { name, type, produced, date, imageUrl, description } = values;

        if (!name || !type || !produced || !date || !imageUrl || !description) {
            return setError("All fields are required.");
        }

        if (Number(produced) < 1) {
            return setError("Units produced must be a positive number.");
        }

        if (Number(date) < 1886 || Number(date) > 2035) {
            return setError("Year must be between 1886 and 2035.");
        }

        if (!imageUrl.startsWith("http")) {
            return setError("Image URL must be a valid link starting with http or https.");
        }

        if (description.length < 10) {
            return setError("Description must be at least 10 characters.");
        }

        const data = {
            ...values,
            produced: Number(values.produced)
        };

        try {
            await request('/data/cars', 'POST', data)
            navigate('/cars')
        } catch (err) {
            alert(err.message)
        }
    }

    const { register, formAction } = useForm(createCarHandler, {
        name: '',
        type: '',
        produced: '',
        date: '',
        imaegUrl: '',
        description: ''
    })


    return (
        <div className="min-h-screen bg-black pt-32 px-6 flex justify-center">
            <div className="w-full max-w-2xl border border-white/20 bg-black/40 backdrop-blur-md rounded-xl p-10">

                <h1 className="text-white text-4xl font-semibold mb-10 tracking-wide text-center">
                    Add a New Luxury Car
                </h1>

                {error && (
                    <div className="w-full text-center border border-red-500/40 bg-red-600/20 text-red-300 py-2 px-4 rounded-lg mb-6 tracking-wide">
                        {error}
                    </div>
                )}

                <form className="flex flex-col gap-7" action={formAction}>

                    {/* Car Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Car Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Ferrari SF90 Stradale"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            {...register('name')}
                        />
                    </div>

                    {/* Type */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Type</label>
                        <input
                            type="text"
                            placeholder="e.g. Sports, Hypercar, GT"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            {...register('type')}
                        />
                    </div>

                    {/* Units Produced */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Units Produced</label>
                        <input
                            type="number"
                            placeholder="e.g. 500"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            {...register('produced')}
                        />
                    </div>

                    {/* Year of Manufacture */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Year of Manufacture</label>
                        <input
                            type="number"
                            placeholder="e.g. 2024"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            {...register('date')}
                        />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Image URL</label>
                        <input
                            type="text"
                            placeholder="Paste image URL here"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            {...register('imageUrl')}
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Description</label>
                        <textarea
                            rows="5"
                            placeholder="Write a detailed description..."
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40 resize-none"
                            {...register('description')}
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
