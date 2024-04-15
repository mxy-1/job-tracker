import { ApplicationType } from "../types/Application.type";
import "./Application.styles.css"
import { formatDate } from "../utils";

const Application = ({ application }: { application: ApplicationType }) => {

    return (
        <div className="application">

            <div className="dates">
                <p>{formatDate(application.dateApplied)}</p>
                <div>
                    {/* {!application.dateApplied && <p>Deadline: {formatDate(application.deadline)}</p>} */}
                    {<p>Deadline: {formatDate(application.deadline)}</p>}

                    {application.interview && <p>Interview: {formatDate(application.interview)}</p>}
                </div>
            </div>

            <h2 className="job-title">{application.jobTitle}</h2>
            <h3 className="company">{application.company}</h3>

            <p>{application.location}</p>

            {application.salary && <p className="salary">£{application.salary} </p>}
            {application.hours && <p className="hours">{application.hours} hrs/week</p>}

            <p className="comments">{application.comments}</p>

            <p>{application.status}</p>

        </div>
    );
}

export default Application;