

import events from '../images/events.jpg';
import sports from '../images/sports.jpg';
import literature from '../images/lit.jpg';
import technical from '../images/tech.jpg';
import cocurricular from '../images/cocu.jpg';
import achievements from '../images/ach.jpg';
import  Notification from '../modules/notification';



import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Literature from '../modules/Literature';
import background from '../images/background.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';



function Home () {
  const Image = {
    //backgroundImage: `url("${background}")`, 
    backgroundSize: 'cover',
    height: '100vh',  
    width: '100%',
  };

  const navigate = useNavigate();
  const Eve = () => navigate('/Events');
  const Lit = () => navigate('/Literature');
  const Coc = () => navigate('/Cocurricular');
  const Spo = () => navigate('/Sports');
  const Tech = () => navigate('/Technical');
  const Ach = () => navigate('/Achievements');
  const load = () => navigate('/Download');

  
  
  
  
  return (
    <>
    <div style = {Image} >
        <Notification/>
            <div className='all' >
               <div className="box1" onClick={Eve}>
                 <img src={events} alt="Description" className="events" />
                 <h5 className="cardtitle">Events</h5>
                </div>    
                <div className="box1" onClick={Lit}>
                 <img src={literature} alt="Description" className="events" />
                 <h5 className="cardtitle">Literature</h5>
                </div>
                <div className="box1" onClick={Coc}>
                 <img src={cocurricular} alt="Description" className="events" />
                 <h5 className="cardtitle">Cocurricular</h5>
                </div>
                <div className="box1" onClick={Spo}>
                 <img src={sports} alt="Description" className="events" />
                 <h5 className="cardtitle">Sports</h5>
                </div>
                <div className="box1" onClick={Tech}>
                 <img src={technical} alt="Description" className="events" />
                 <h5 className="cardtitle">Technical</h5>
                </div>
                <div className="box1" onClick={Ach}>
                 <img src={achievements} alt="Description" className="events" />
                 <h5 className="cardtitle">Achievements</h5>
                </div>
            </div>
       
        

       
        </div>
       </>
  );

}

export default Home;


