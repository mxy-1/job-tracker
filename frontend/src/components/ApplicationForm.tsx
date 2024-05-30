import { useEffect, useState } from "react";
import { ApplicationDataType } from "../types/ApplicationData.type";
import "./ApplicationForm.style.css"
import { getCurrentDate } from "../utils";
import { postFormData, getSingleApplication, updateFormData, deleteApplication } from "../utils/api.ts"
import { useParams, useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { useAuthContext } from "../hooks/useAuthContext.ts";

const ApplicationForm = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const {user} = useAuthContext()
    const isLoggedIn = !!localStorage.getItem('user');

    let token: string
    if (isLoggedIn && user) {
        token = user.token
    }
    const initialApplicationData = {
        date: "",
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

    useEffect(() => {
        if (!isLoggedIn) {
            throw Error ("User must be logged in")
        }

        if (id) {
            getSingleApplication(id, token)
                .then(({ application }): void => {
                    ["date", "deadline", "interview"].forEach(item => {
                        if (application[item]) {
                            application[item] = application[item].slice(0, 10)
                        }
                    })
                    setApplicationData(application)
                })
                .catch((error) => {
                    console.log("Error", error)
                })
        }
        else {
            setApplicationData({...initialApplicationData, date: getCurrentDate()})
        }
    }, [id, user]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const value = e.target.value
        const name = e.target.name

        setApplicationData((prevApplicationData) => {
            return { ...prevApplicationData, [name]: value }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isLoggedIn) {
            throw Error("User must be loggged in")
        }

        if (id) {
            updateFormData(applicationData, id, token)
                .then(res => {
                    setApplicationData(initialApplicationData)
                    navigate("/jobs")
                    if (!res.ok) {
                        throw new Error("Failed to update job application")
                    }
                })
                .catch(err => console.log("Error:", err))

        } else {
            postFormData(applicationData, token)
                .then(data => {
                    console.log("Success:", data)
                    setApplicationData(initialApplicationData)
                    navigate("/jobs")
                })
                .catch(err => console.log("Error:", err))
        }
    }

    const handleClick = () => {
        if (id) {
            deleteApplication(id, token)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to delete job application")
                } else {
                    navigate("/jobs")
                }
            })
            .catch(err => console.log("Error:", err))
        } else {
            setApplicationData(initialApplicationData)
        }
    }

    return (
        <div className="application-container">
            <div className="delete-container"><button className="delete" onClick={handleClick}><TiDeleteOutline size={28} color="#97BCC7"/></button></div>

            <h2 className="job-app">{id ? "Update job application" : "Job application"}</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Date <input type="date" id="date" name="date" value={applicationData.date} onChange={handleChange} />
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
                    Interview <input type="date" name="interview" value={applicationData.interview} onChange={handleChange} />
                </label>
                <label>
                    Comments <textarea rows={5} name="comments" value={applicationData.comments} onChange={handleChange} />
                </label>
                <button type="submit" className="submit">{id ? "Update" : "Add"}</button>
            </form>
        </div>
    );
}
export default ApplicationForm;