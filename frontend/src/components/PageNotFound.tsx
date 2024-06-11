import { Link } from "react-router-dom"
import "./PageNotFound.style.css"
export const PageNotFound = () => {
  return (
    <div className="application-container-wrapper">
      <div className="application-container">
        <h2>Page not found</h2>
        <p>Go back to <Link to="/jobs" className="jobs">jobs</Link></p>
      </div>
    </div>
  )
}
