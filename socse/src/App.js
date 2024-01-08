import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Upload from './Pages/Upload.js';
import Nav from './Pages/Nav';
import Literature from "./modules/Literature";
import Events from "./modules/events";
import Cocurricular from "./modules/Cocurricular";
import Sports from "./modules/Sports";
import Technical from "./modules/Technical";
import Achievements from "./modules/Achievements";
import  Register from './modules/register';
import LiteratureDetail from './Details/LiteratureDetail.js';
import SportsDetail from "./Details/SportsDetail.js";
import AchievementDetail from "./Details/Achievements.js";
import CocurricularDetail from "./Details/CocurricularDetail.js";
import Edit from "./Details/Edit.js";
import TechnicalDetail from "./Details/TechnicalDetail.js";


function App(){
  return(
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/upload" element={<Upload/>}></Route>
      <Route path="/Literature" element={<Literature/>}></Route>
      <Route path="/Events" element={<Events/>}></Route>
      <Route path="/Cocurricular" element={<Cocurricular/>}></Route>
      <Route path="/Sports" element={<Sports/>}></Route>
      <Route path="/Technical" element={<Technical/>}></Route>
      <Route path="/Achievements" element={<Achievements/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/literature-detail" element={<LiteratureDetail/>}></Route>
      <Route path="/sports-detail" element={<SportsDetail/>}></Route>
       <Route path="/Achievements-detail" element={<AchievementDetail/>}></Route> 
       <Route path="/Edit" element={<Edit/>}></Route>
       <Route path="/cocurricular-detail" element={<CocurricularDetail/>}></Route>
       <Route path="/technical-detail" element={<TechnicalDetail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
