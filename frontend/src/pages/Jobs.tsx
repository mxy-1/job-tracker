import { useEffect, useState } from 'react';
import Application from '../components/Application';
import { ApplicationType } from '../types/Application.type';
import "./Jobs.styles.css"

export const Jobs = () => {
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

  // const applications = [
  //   {
  //     company: "google",
  //     job_title: "engineer"
  //   },
  //   {
  //     company: "windows",
  //     job_title: "engineer"
  //   }
  // ]
  return (
    <div>
      <div className='count'>
        <h1>{applications?.length || "0"} </h1>
        <p>jobs applied to</p>
      </div>

      <div>
        {applications && applications.map(application => (
          <Application application={application} key={application.createdAt.toString()}/>
        ))}
      </div>
    </div>
  )
}
