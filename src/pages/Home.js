import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="home">
      <div className="title">
        <h1>Welcome to the Body Building App!</h1>
        <h2>Lets get started!</h2>
      </div>
      <div className="home-content">
        <div className="tile-box">
          <Link to="/workout-plans">
            <button className="button">Choose an excercise</button>
          </Link>
        </div>
        <div className="tile-box">
          <Link to="/workout-log">
            <button className="button">View your excercise log</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
