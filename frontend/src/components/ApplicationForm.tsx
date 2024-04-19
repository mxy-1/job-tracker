import { useState } from "react";
import { ApplicationDataType } from "../types/ApplicationData.type";
import "./ApplicationForm.style.css"
import { getCurrentDate } from "../utils";
import {postFormData} from "../utils/api.ts"

const ApplicationForm = () => {

    const initialApplicationData = {
        date: getCurrentDate(),
        company: "",
        title: "",
        location: "",
        hours: "",
        salary: "",
        deadline: "",
        status: "Waiting to hear back",
        interview: "",
        comments: ""
    }

    const [applicationData, setApplicationData] = useState<ApplicationDataType>(initialApplicationData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const value = e.target.value
        const name = e.target.name

        setApplicationData((prevApplicationData) => {
            return { ...prevApplicationData, [name]: value }
        })

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        postFormData(applicationData)
            .then(data => {
                console.log("Success:", data)
                setApplicationData(initialApplicationData)
            })
            .catch(err => console.log("Error:", err))
    }
    return (
        <div className="application-container">
            <h2>Job application</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Date <input type="date" id="date" name="date" value={applicationData.date} onChange={handleChange}/>
                </label>
                <label>
                    Company <input type="text" name="company" value={applicationData.company} onChange={handleChange} />
                </label>
                <label>
                    Job title <input type="text" name="title" required value={applicationData.title} onChange={handleChange} />
                </label>
                <label>
                    Location <input type="string" name="location" value={applicationData.location} onChange={handleChange} />
                </label>
                <label>
                    Hours/week <input type="number" name="hours" min={0} max={100} value={applicationData.hours} onChange={handleChange} />
                </label>
                <label>
                    Salary (£/year) <input type="number" name="salary" min={0} value={applicationData.salary} onChange={handleChange} />
                </label>
                <label>
                    Deadline <input type="date" name="deadline" value={applicationData.deadline} onChange={handleChange} />
                </label>
                <label>
                    Status
                    <select name="status" value={applicationData.status} onChange={handleChange}>
                        <option>Waiting to hear back</option>
                        <option>Interviewing</option>
                        <option>Unsuccessful</option>
                        <option>No answer</option>
                        <option>Ghosted</option>
                        <option>Successful - accepted</option>
                        <option>Successful - rejected</option>
                    </select>
                </label>

                <label>
                    Interview <input type="date" value={applicationData.interview} onChange={handleChange} />
                </label>
                <label>
                    Comments <textarea rows={5} name="comments" value={applicationData.comments} onChange={handleChange} />
                </label>
                <button type="submit" className="add">Add</button>
            </form>
        </div>
    );
}

export default ApplicationForm;