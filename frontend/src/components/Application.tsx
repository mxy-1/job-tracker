import { ApplicationType } from "../types/Application.type";
import "./Application.styles.css"

const Application = ({application}: {application: ApplicationType}) => {
    return (
        <div className="application">
            <h2>{application.jobTitle}</h2>
            <h3>{application.company}</h3>
        </div>
    );
}

export default Application;