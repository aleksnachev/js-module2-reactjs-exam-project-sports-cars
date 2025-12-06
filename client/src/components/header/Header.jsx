import { Link } from "react-router";

export default function Header(){
    return(
        <nav>
            <div className="flex space x-4 text-sm font-medium">
                <Link to="/">Home</Link>
            </div>
        </nav>
    )
}