import logo from './logo.svg';
import myImage from './logo.png';
import events from './images/events.jpg';
import sports from './images/sports.jpg';
import literature from './images/literature.jpg';
import technical from './images/techical.jpg';
import cocurricular from './images/co-curricular.png';
import  achievements from './images/acheivements.jpg';
import  download from './images/download.png';

import './App.css';

function App() {
  return (
    <>
    <header>
    <div class="navbar">
    <img src={myImage} alt="Description" class="logo"/>
    <h2 class="heading">Socse Association</h2>
    <nav>
        <ul>
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact Us</a></li>
        </ul>
    </nav>
</div> 
</header>

<body>
  <div class="images">
<img src={events} alt="Description" class="events"/>
<img src={literature} alt="Description" class="literature"/>
<img src={cocurricular} alt="Description" class="co-curricular"/>
<img src={sports} alt="Description" class="sports"/>
<img src={technical} alt="Description" class="technical"/>
<img src={achievements} alt="Description" class="achievements"/>
</div>
</body>

<footer>
<img src={download} alt="Description" class="download"/>
<button className='download-text'><b>Download</b></button>
</footer>
</>



  );
}

export default App;