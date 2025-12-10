import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js"
import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext.jsx"

export default function Register() {
    const navigate = useNavigate()
    const { registerHandler } = useContext(UserContext)

    const [error, setError] = useState("");

    const registerSubmitHandler = async (values) => {
        const { email, password, confirmPassword } = values
        //Validation
        if (!email || !password || !confirmPassword) {
            return setError("All fields are required.");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters.");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match.");
        }

        try {
            // Register User
            await registerHandler(email, password)

            // Redirect to home page 
            navigate('/')
        } catch (err) {
            alert(err.message)
        }
    }

    const { register, formAction } = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        confirmPassword: ''
    })
    return (
        <div className="min-h-screen bg-black pt-32 px-6 flex justify-center">
            <div className="w-full max-w-md border border-white/20 bg-black/40 backdrop-blur-md rounded-xl p-8">

                <h1 className="text-white text-4xl font-semibold mb-8 tracking-wide text-center">
                    Register
                </h1>

                {error && (
                    <div className="w-full text-center border border-red-400/40 bg-red-500/20 text-red-300 py-2 px-4 rounded-lg mb-4 tracking-wide">
                        {error}
                    </div>
                )}

                <form className="flex flex-col gap-6" action={formAction}>

                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Email</label>
                        <input
                            type="email"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            placeholder="Enter your email"
                            id="email"
                            {...register('email')}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Password</label>
                        <input
                            type="password"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            placeholder="Enter password"
                            id="password"
                            {...register('password')}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Confirm Password</label>
                        <input
                            type="password"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            placeholder="Confirm password"
                            id="confirm-password"
                            {...register('confirmPassword')}
                        />
                    </div>

                    <button className="w-full border border-white/40 text-white py-3 rounded-lg mt-4 hover:bg-white hover:text-black transition-all tracking-wide">
                        Register
                    </button>

                </form>
            </div>
        </div>
    );
}
