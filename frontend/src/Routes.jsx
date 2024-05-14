//import { useState } from 'react'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function RouteComponent() {
    return (
        
        <BrowserRouter>
        <Routes>
            <Route path='/Register' element={<Register/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default RouteComponent;