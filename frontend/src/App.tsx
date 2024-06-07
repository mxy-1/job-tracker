import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Jobs } from './pages/Jobs';
import { Form } from './pages/Form';
import { Header } from './components/Header';
import Login from './pages/LogIn';
import PrivateRoute from './components/PrivateRoute';
import { PageNotFound } from './components/PageNotFound';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="jobs">
                    <Route index element={<PrivateRoute><Jobs /></PrivateRoute> } />
                    <Route path="add-new" element={<PrivateRoute><Form /></PrivateRoute> } />
                    <Route path=":id" element={<PrivateRoute><Form /></PrivateRoute> } />
                </Route>

                <Route path="log-in" element={<Login />} />
                <Route path="sign-up" element={<Login />} />
                <Route path="*" element={<PageNotFound/ >}/>
            </Routes>
            <Nav />
        </BrowserRouter>
    )
}

export default App
