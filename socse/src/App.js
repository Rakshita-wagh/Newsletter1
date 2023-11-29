import logo from './logo.svg';
import myImage from './logo.png';
import events from './images/events.jpg';
import sports from './images/sports.jpg';

import './App.css';

function App() {
  return (
    <header>
    <div class="navbar">
    <img src={myImage} alt="Description" />
    <nav>
        <ul>
            <li><a>Home</a></li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
    </nav>
</div>
<img src={events} alt="event" />
  
</header>

  );
}

export default App;
