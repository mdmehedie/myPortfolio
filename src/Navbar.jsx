import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [showBg, setShowBg] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset > 20) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };

  return (
    <div className={`navbar ${showBg && "navbar__hasScrolled"}`}>
        <ul className="navbar__linksContainer">
            <li>
                <Link to="home" smooth>Home</Link>
            </li>
            <li>
                <Link to="about" smooth>About</Link>
            </li>
            <li>
                <Link to="projects" smooth>Projectst</Link>
            </li>
            <li>
                <Link to="experiences" smooth>Experiences</Link>
            </li>
        </ul>
    </div>
  );
}

export default Navbar;
