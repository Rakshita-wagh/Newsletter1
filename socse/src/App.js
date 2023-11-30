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




  );
}

export default App;
