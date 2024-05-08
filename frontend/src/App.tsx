import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Jobs } from './pages/Jobs';
import { Form } from './pages/Form';
import { Header } from './components/Header';
import LogIn from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="jobs">
          <Route index element={<Jobs/>}/>
          <Route path="add-new" element={<Form/>}/>
          <Route path=":id" element={<Form />}/>
        </Route>

        <Route path="log-in" element={<LogIn />}/>
        <Route path="sign-up" element={<LogIn />}/>

      </Routes>
      <Nav/>
    </BrowserRouter>
  )
}

export default App
