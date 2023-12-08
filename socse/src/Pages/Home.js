

import events from '../images/events.jpg';
import sports from '../images/sports.jpg';
import literature from '../images/literature.jpg';
import technical from '../images/techical.jpg';
import cocurricular from '../images/co-curricular.png';
import achievements from '../images/acheivements.jpg';
import download from '../images/download.png';
import  Notification from '../modules/notification'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Literature from '../modules/Literature';

import './Home.css';
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();

  const clickOnImage = () => {
    navigate('/Literature');
  };


  return (
    <>
        <body>
        <Notification/>
            <div className='all'>
               <div className="box1">
                 <img src={events} alt="Description" className="events" />
                 <h5 className="cardtitle">Events</h5>
                </div>
                <div className="box1" onClick={clickOnImage}>
                 <img src={literature} alt="Description" className="events" />
                 <h5 className="cardtitle">Literature</h5>
                </div>
                <div className="box1">
                 <img src={cocurricular} alt="Description" className="events" />
                 <h5 className="cardtitle">Cocurricular</h5>
                </div>
                <div className="box1">
                 <img src={sports} alt="Description" className="events" />
                 <h5 className="cardtitle">Sports</h5>
                </div>
                <div className="box1">
                 <img src={technical} alt="Description" className="events" />
                 <h5 className="cardtitle">Technical</h5>
                </div>
                <div className="box1">
                 <img src={achievements} alt="Description" className="events" />
                 <h5 className="cardtitle">Achievements</h5>
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
