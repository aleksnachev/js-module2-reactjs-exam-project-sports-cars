import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";
import useForm from "../../hooks/useForm.js";

export default function Login() {

    const navigate = useNavigate()
    const { loginHandler } = useContext(UserContext)

    const [error, setError] = useState("");

    const submitHandler = async ({ email, password }) => {
        setError("")
        if (!email || !password) {
            return setError("Email and password are required.");
        }

        try {
            await loginHandler(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message || "Invalid email or password");
        }
    };



    const { register, formAction } = useForm(submitHandler, {
        email: '',
        password: ''
    })
    return (
        <div className="min-h-screen bg-black pt-32 px-6 flex justify-center">
            <div className="w-full max-w-md border border-white/20 bg-black/40 backdrop-blur-md rounded-xl p-8">

                <h1 className="text-white text-4xl font-semibold mb-8 tracking-wide text-center">
                    Login
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
                            placeholder="Enter your password"
                            id="login-password"
                            {...register('password')}
                        />
                    </div>

                    <button className="w-full border border-white/40 text-white py-3 rounded-lg mt-4 hover:bg-white hover:text-black transition-all tracking-wide">
                        Log In
                    </button>

                </form>
            </div>
        </div>
    );
}
