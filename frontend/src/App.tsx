import './App.css'

function App() {
  fetch("http://localhost:4000/api/applications/")
    .then((res) => {
      return res.json()
    })
    .then(data => {
      console.log(data)
    })

  return (
    <h1>Job tracker</h1>
  )
}

export default App
