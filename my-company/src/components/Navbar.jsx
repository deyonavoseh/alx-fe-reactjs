import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav style={{backgroundColor: "black", display: "flex", justifyContent: "space-between"}}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
      </nav>
    </>
  );
}

export default Navbar;