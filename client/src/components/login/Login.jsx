export default function Login() {
    return (
        <div className="min-h-screen bg-black pt-32 px-6 flex justify-center">
            <div className="w-full max-w-md border border-white/20 bg-black/40 backdrop-blur-md rounded-xl p-8">

                <h1 className="text-white text-4xl font-semibold mb-8 tracking-wide text-center">
                    Login
                </h1>

                <form className="flex flex-col gap-6">

                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Email</label>
                        <input
                            type="email"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 tracking-wide">Password</label>
                        <input
                            type="password"
                            className="bg-black/30 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-white/40"
                            placeholder="Enter your password"
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
