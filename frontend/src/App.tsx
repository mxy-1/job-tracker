import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Jobs } from './pages/Jobs';
import { Form } from './pages/Form';
import { Header } from './components/Header';
import Login from './pages/LogIn';

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

        <Route path="log-in" element={<Login />}/>
        <Route path="sign-up" element={<Login />}/>

      </Routes>
      <Nav/>
    </BrowserRouter>
  )
}

export default App
