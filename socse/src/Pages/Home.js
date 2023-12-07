
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
    
    
    // <BrowserRouter>
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
              </ul>
            </nav>
          </div>
        </header>

        <body>
          <div className="images">
            <img src={events} alt="Description" className="events" />
              <img src={literature} alt="Description" className="literature" />
            <img src={cocurricular} alt="Description" className="co-curricular" />
            <img src={sports} alt="Description" className="sports" />
            <img src={technical} alt="Description" className="technical" />
            <img src={achievements} alt="Description" className="achievements" />
          </div>
       
        </body>

        <footer>
          <img src={download} alt="Description" className="download" />
          <button className='download-text'><b>Download</b></button>
          <div className='first'></div>
        </footer>
{/* <Routes>
  <Route path='/literature' element={<Literature/>}></Route>
</Routes> */}
        
      </>
    // </BrowserRouter>
  );
}

export default Home;
