// import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
      <nav className="nav-bar">
        <div className="logo">
          <Link to="/">
            <div>Fitness App</div>
          </Link>
        </div>
        <div className="nav-item">
          <ul className="nav-list">
            <li>Contact</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
