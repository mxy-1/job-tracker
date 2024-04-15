import { ApplicationType } from "../types/Application.type";
import "./Application.styles.css"
import { formatDate } from "../utils";

const Application = ({ application }: { application: ApplicationType }) => {

    return (
        <div className="application">
            <p>{formatDate(application.dateApplied)}</p>
            <p>Deadline: {formatDate(application.deadline)}</p>

            {application.interview && <p>Interview: {formatDate(application.interview)}</p>}

            <h2>{application.jobTitle}</h2>
            <h3>{application.company}</h3>
            
            <p>{application.location}</p>
            {application.hours && <p>{application.hours} hrs/week</p>}
            {application.salary && <p>£{application.salary}</p>}


            {application.comments && <p>Comments:</p>}
            <p>{application.comments}</p>

            <p>{application.status}</p>

        </div>
    );
}

export default Application;