import { useEffect, useState } from 'react';
import './App.css'

type ApplicationType = {
  job_title: string
  company: string
}

function App() {
  const [applications, setApplications] = useState<null | ApplicationType[]>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/applications/")
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setApplications(data.applications)
      })
  }, []);


  return (
    <div>
      <h1>Job tracker</h1>
      <div>
        {applications && applications.map(application => (
          <div>
            <h2>{application.job_title}</h2>
            <h3>{application.company}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
