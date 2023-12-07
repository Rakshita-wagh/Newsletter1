
import myImage from '../logo.png';
import events from '../images/events.jpg';
import sports from '../images/sports.jpg';
import literature from '../images/literature.jpg';
import technical from '../images/techical.jpg';
import cocurricular from '../images/co-curricular.png';
import achievements from '../images/acheivements.jpg';
import download from '../images/download.png';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Literature from '../modules/Literature';

import './Home.css';




function Home() {
  return (
      <>
        <header>
          <div className="navbar">
            <img src={myImage} alt="Description" className="logo" />
            <h2 className="heading">Socse Association</h2>
            <nav> 
              <ul>
              <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <body>
            <div className='all'>
               <div className="box1">
                 <img src={events} alt="Description" className="events" />
                 <button className='cardtitle'>Events</button>
                </div>
                <div className="box1">
                 <img src={literature} alt="Description" className="events" />
                 <button className='cardtitle'>Literature</button>
                </div>
                <div className="box1">
                 <img src={cocurricular} alt="Description" className="events" />
                 <button className='cardtitle'>Cocurricular</button>
                </div>
                <div className="box1">
                 <img src={sports} alt="Description" className="events" />
                 <button className='cardtitle'>Sports</button>
                </div>
                <div className="box1">
                 <img src={technical} alt="Description" className="events" />
                 <button className='cardtitle'>Technical</button>
                </div>
                <div className="box1">
                 <img src={achievements} alt="Description" className="events" />
                 <button className='cardtitle'>Achievements</button>
                </div>
            </div>
       
        </body>

        <footer>
          <img src={download} alt="Description" className="download" />
          <button className='download-text'><b>Download</b></button>
          <div className='first'></div>
        </footer>
      </>
  );
}

export default Home;
