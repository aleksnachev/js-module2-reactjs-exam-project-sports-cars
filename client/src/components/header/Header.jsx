import { NavLink, Link } from "react-router";

export default function Header() {
    const navStyles =
        "text-white text-lg tracking-wide transition-all duration-200 hover:text-white hover:brightness-150 hover:scale-110";

    return (
        <header className="w-full bg-black/50 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 z-50">
            <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-white text-3xl font-semibold tracking-wider hover:brightness-150 transition-all"
                >
                    LUXE<span className="text-white/60">CARS</span>
                </Link>

                {/* Navigation */}
                <div className="flex gap-10">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? `${navStyles} brightness-150 scale-110`
                                : navStyles
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/catalog"
                        className={({ isActive }) =>
                            isActive
                                ? `${navStyles} brightness-150 scale-110`
                                : navStyles
                        }
                    >
                        Catalog
                    </NavLink>

                    <NavLink
                        to="/add-car"
                        className={({ isActive }) =>
                            isActive
                                ? `${navStyles} brightness-150 scale-110`
                                : navStyles
                        }
                    >
                        Add Car
                    </NavLink>

                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? `${navStyles} brightness-150 scale-110`
                                : navStyles
                        }
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive
                                ? `${navStyles} brightness-150 scale-110`
                                : navStyles
                        }
                    >
                        Register
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

