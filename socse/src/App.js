import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Pages/Nav'


function App(){
  return(
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
