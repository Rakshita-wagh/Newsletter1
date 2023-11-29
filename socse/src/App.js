import logo from './logo.svg';
import myImage from './logo.png';
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
</header>

  );
}

export default App;
