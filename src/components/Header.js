import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styledheader = styled.header`
  display: flexed;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Fitness</div>
      </Link>
    </nav>
  );
}

export default Header;
