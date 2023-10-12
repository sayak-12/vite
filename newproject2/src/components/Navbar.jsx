/* eslint-disable react/prop-types */
import './nav.css';

const Navbar = (props) => {
  return (
      <nav>
        <h2>{props.heading}</h2>
        <div className="menuitem">Home</div>
        <div className="menuitem">About</div>
        <div className="menuitem">Works</div>
        <div className="menuitem">Contact</div>
      </nav>
  );
};

export default Navbar;
