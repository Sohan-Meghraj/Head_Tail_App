import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Head & Tail Game</h1>
      <nav>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/head-tail" className="nav-link">Play Game</Link>
      </nav>
    </div>
  );
}

export default Home;