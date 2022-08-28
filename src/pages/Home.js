import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/workout-plans">
        <h2>Get Started</h2>
      </Link>
    </>
  );
}

export default Home;
