import { Link, Outlet } from "react-router-dom"
import "./Nav.style.css"

export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/jobs" className="nav-link">Jobs</Link>
          </li>
          <li>
            <Link to="/jobs/add-new" className="nav-link">New</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
}
