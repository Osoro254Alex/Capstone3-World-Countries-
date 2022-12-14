import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link className="link" to="/">
      {' '}
      <i className="fa-solid fa-house" />
    </Link>
    <h2 className="header-tag">Explore The World</h2>
    <div className="header-controls">
      <i className="fa-solid fa-microphone fa-2x" />
      <i className="fa-solid fa-gear fa-2x" />
    </div>
  </header>
);

export default Header;
