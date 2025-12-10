import { useNavigate, useParams } from "react-router"
import useRequest from "../../hooks/useRequest.js"
import useForm from "../../hooks/useForm.js"
import { useEffect, useState } from "react"

export default function EditCar() {
    const navigate = useNavigate()
    const { carId } = useParams()
    const { request } = useRequest()

    const [error, setError] = useState("");

    const editCarHandler = async (values) => {

        setError("");

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
            return setError("Image URL must be a valid link.");
        }

        if (description.length < 10) {
            return setError("Description must be at least 10 characters long.");
        }

        try {
            await request(`/data/cars/${carId}`, 'PUT', values)
            navigate(`/cars/${carId}/details`)
        } catch (err) {
            alert(err.message)
        }
    }

    const { register, formAction, setValues } = useForm(editCarHandler, {
        name: '',
        type: '',
        produced: '',
        date: '',
        imaegUrl: '',
        description: ''
    })

    useEffect(() => {
        request(`/data/cars/${carId}`)
            .then(result => {
                setValues(result)
            })
            .catch(err => {
                alert(err.message)
            })
    }, [carId, setValues])


    return (
        <section className="max-w-4xl mx-auto mt-20 mb-20 bg-black/40 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-2xl">

            <h1 className="text-4xl font-bold text-white mb-10 tracking-wide text-center">
                Edit Car
            </h1>

            {error && (
                <div className="w-full text-center border border-red-500/40 bg-red-600/20 text-red-300 py-2 px-4 rounded-lg mb-8 tracking-wide">
                    {error}
                </div>
            )}

            <form action={formAction} className="space-y-8">

                {/* Car Name */}
                <div className="flex flex-col">
                    <label className="text-white/80 mb-2 tracking-wide">Car Name</label>
                    <input
                        {...register("name")}
                        id="gameName"
                        className="bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition"
                        type="text"
                    />
                </div>

                {/* Car Type */}
                <div className="flex flex-col">
                    <label className="text-white/80 mb-2 tracking-wide">Type</label>
                    <input
                        {...register("type")}
                        id="type"
                        className="bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition"
                        type="text"
                    />
                </div>

                {/* Produced Count */}
                <div className="flex flex-col">
                    <label className="text-white/80 mb-2 tracking-wide">Produced Units</label>
                    <input
                        {...register("produced")}
                        id="produced"
                        className="bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition"
                        type="number"
                    />
                </div>

                {/* Production Year */}
                <div className="flex flex-col">
                    <label className="text-white/80 mb-2 tracking-wide">Production Year</label>
                    <input
                        {...register("date")}
                        id="date"
                        className="bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition"
                        type="text"
                    />
                </div>

                {/* Image URL */}
                <div className="flex flex-col">
                    <label className="text-white/80 mb-2 tracking-wide">Image URL</label>
                    <input
                        {...register("imageUrl")}
                        id="imageUrl"
                        className="bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition"
                        type="text"
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col">
                    <label className="text-white/80 mb-2 tracking-wide">Description</label>
                    <textarea
                        {...register("description")}
                        id="description"
                        className="bg-black/20 border border-white/20 rounded-lg p-3 text-white h-40 placeholder-white/30 focus:outline-none focus:border-white/40 transition resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-10 py-3 border border-white/20 text-white rounded-xl tracking-wide font-semibold hover:bg-white hover:text-black transition shadow-md"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </section>
    );
}
