import { Route, Routes } from 'react-router'
import Home from './components/home/Home.jsx'
import Header from './components/header/Header.jsx'

function App() {

    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

        </>
    )
}

export default App
