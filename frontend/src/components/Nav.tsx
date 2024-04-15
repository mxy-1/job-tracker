import { Link, Outlet } from "react-router-dom"

export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/jobs/add-new">New</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
}
