import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import RegisterLogin from './RegisterLogin'
import Home from './Home'

export default function PasswordLogin() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path='/' element={<RegisterLogin/>}/>
            <Route path='/home' element={<Home/>}/>


        </Routes>
    </div>
    </BrowserRouter>
    
  )
}
