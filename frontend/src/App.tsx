import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Jobs } from './pages/Jobs';
import { New } from './pages/New';
import { Header } from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/jobs"} element={<Nav/>}>
          <Route index element={<Jobs/>}/>
          <Route path="add-new" element={<New/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
