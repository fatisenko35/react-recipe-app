import React from 'react'
import About from './about/About'
import Recipe from './recipe/Recipe'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarTop from './navbar/Navbar';



const Router = ({isLoggedIn, setIsLoggedIn}) => {
  return (
      <>
    <BrowserRouter >
     
        <NavbarTop isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
        
        
          <Routes>
            <Route path="/" element={< Recipe/>} />
            

           
            <Route path="/about" element={<About />} />
            
          </Routes>
   
       
      </BrowserRouter>
      </>
  )
}

export default Router