import logo from './logo.svg';
import myImage from './logo.png';
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
</header>

  );
}

export default App;
