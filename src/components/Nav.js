
const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
