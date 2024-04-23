import { ApplicationType } from "../types/Application.type";
import "./Application.styles.css"
import { formatDate } from "../utils";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { PiCoinLight } from "react-icons/pi";

const Application = ({ application }: { application: ApplicationType }) => {
    
    return (
        <div className="application">

            <div className="dates">
                <p>{application.date ? formatDate(application.date) : ""}</p>
                <div>
                    {/* {!application.date && <p>Deadline: {formatDate(application.deadline)}</p>} */}
                    {application.deadline && <p>Deadline: {formatDate(application.deadline)}</p>}

                    {application.interview && <p>Interview: {formatDate(application.interview)}</p>}
                </div>
            </div>

            <h2 className="job-title">{application.title}</h2>
            <h3 className="company">{application.company}</h3>

            {application.location && <p><IoLocationOutline size={14} color="#006884"/> {application.location}</p>}

            {application.salary && <p className="salary"><PiCoinLight size={13} color="#006884" /> £{application.salary} </p>}
            {application.hours && <p className="hours"><GoClock size={13} color="#006884" /> {application.hours} hrs/week</p>}

            <p className="comments">{application.comments}</p>

            <div className="status-container">
                <p className={`status ${application.status}`} >{application.status}</p>
            </div>
        </div>
    );
}

export default Application;