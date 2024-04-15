import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <Link to="/jobs">
                <h1>Job Tracker</h1>
            </Link>
        </header>
    )
}
