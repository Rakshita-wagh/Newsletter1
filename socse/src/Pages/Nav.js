import React from 'react';
import myImage from '../logo.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Nav.css';



function Nav(){
    return(
        <>
        <header>
          <div className="navbar">
            <img src={myImage} alt="Description" className="logo" />
            <h2 className="heading">Socse Association</h2>
            <nav> 
              <ul>
              <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
                <Link to="/upload"><li>Upload</li></Link>
              </ul>
            </nav>
          </div>
        </header>
        </>
    )
}

export default Nav;
