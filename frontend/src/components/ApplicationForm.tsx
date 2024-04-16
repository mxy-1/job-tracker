import "./ApplicationForm.style.css"

const ApplicationForm = () => {
    return (
        <div className="application-container">
            <h2>Job application</h2>

            <form>
                <label>
                    Date <input type="date" />
                </label>
                <label>
                    Company <input type="text" />
                </label>
                <label>
                    Job title <input type="text" required />
                </label>
                <label>
                    Location <input type="string" />
                </label>
                <label>
                    Hours/week <input type="number" min={0} max={100} />
                </label>
                <label>
                    Salary (£/year) <input type="number" min={0}/>
                </label>
                <label>
                    Deadline <input type="date" />
                </label>
                <label>
                    Status
                    <select>
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
                    Interview <input type="date" />
                </label>
                <label>
                    Comments <textarea rows={4}/>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default ApplicationForm;