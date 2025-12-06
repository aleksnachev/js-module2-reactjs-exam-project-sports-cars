import { Route, Routes } from 'react-router'
import Home from './components/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import AddCar from './components/add-car/AddCar.jsx'
import Details from './components/details/Details.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

    return (
        <>
            <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/cars" element={<Catalog/>}/>
                    <Route path="/cars/:carId/details" element={<Details/>}/>
                    <Route path="/cars/create" element={<AddCar/>}/>

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                </Routes>
                
            <Footer/>
        </>
    )
}

export default App
