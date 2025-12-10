import { Route, Routes } from 'react-router'
import Home from './components/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import AddCar from './components/add-car/AddCar.jsx'
import Details from './components/details/Details.jsx'
import Footer from './components/footer/Footer.jsx'
import Logout from './components/logout/Logout.jsx'
import { useContext } from 'react'
import UserContext from './contexts/UserContext.jsx'

function App() {
    const {user} = useContext(UserContext)
    return (
        <>
            <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/cars" element={<Catalog/>}/>
                    <Route path="/cars/:carId/details" element={<Details user={user}/>}/>
                    <Route path="/cars/create" element={<AddCar/>}/>

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/logout" element={<Logout/>}/>


                </Routes>
                
            <Footer/>
        </>
    )
}

export default App
