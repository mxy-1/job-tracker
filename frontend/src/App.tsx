import { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Jobs } from './pages/Jobs';
import { New } from './pages/New';
import { Header } from './components/Header';

type ApplicationType = {
  job_title: string
  company: string
}

function App() {
  // const [applications, setApplications] = useState<null | ApplicationType[]>(null);

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/applications/")
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       setApplications(data.applications)
  //     })
  // }, []);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/jobs"} element={<Nav/>}>
          <Route index element={<Jobs/>}/>
          <Route path="add-new" element={<New/>}/>
        </Route>
      </Routes>
      {/* <div>
          {applications && applications.map(application => (
            <div>
              <h2>{application.job_title}</h2>
              <h3>{application.company}</h3>
            </div>
          ))}
        </div> */}
    </BrowserRouter>
  )
}

export default App
