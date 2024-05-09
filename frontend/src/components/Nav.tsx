import { Link, Outlet } from "react-router-dom"
import "./Nav.style.css"
import { PiNotePencil } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/jobs" className="nav-link"><RxHamburgerMenu size={24}/></Link>
          </li>
          <li>
            <Link to="/jobs/add-new" className="nav-link"><PiNotePencil size={26}/></Link>
          </li>
          <li>
            <Link to="/log-in" className="nav-link"><BsPerson size={26}/></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
}
