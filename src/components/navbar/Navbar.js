import React from 'react';

import { Link } from 'react-router-dom';
import "./Navbar.css";


const NavbarTop = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <>

    
    <div className="wrapper" >
        <div className="navleft">
           
        <Link to="/" >{"<Fatisenko>"}<span className="span">Recipe</span></Link>
        </div>
       
          <div className="navlink">
          <Link to="/about" className="about">About</Link>
          <a  className="github" onClick={() => window.location.href ="https://github.com/fatisenko35"}>Github</a>
          <Link to="/" onClick={() => setIsLoggedIn(false)} >Logout</Link>
          </div>
      
    </div>
   


</>
  )
}

export default NavbarTop