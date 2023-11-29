import logo from './logo.svg';
import myImage from './logo.png';
import events from './images/events.jpg';
import sports from './images/sports.jpg';

import './App.css';

function App() {
  return (
    <header>
    <div class="navbar">
    <img src={myImage} alt="Description" class="logo"/>
    <nav>
        <ul>
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact Us</a></li>
        </ul>
    </nav>
</div>
<img src={events} alt="event" />
  
</header>

  );
}

export default App;
