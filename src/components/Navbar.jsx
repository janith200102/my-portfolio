import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Janith.Dev</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;