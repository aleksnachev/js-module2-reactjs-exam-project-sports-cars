import { Route, Routes } from 'react-router'
import Home from './components/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'

function App() {

    return (
        <>
            <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                </Routes>
        </>
    )
}

export default App
