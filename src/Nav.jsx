import { React, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
  NavbarBrand,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function NavbarContent() {
  const [showBg, setshowBg] = useState(false);
  window.onscroll = () => {
    if (window.pageYOffset > 20) {
      setshowBg(true);
    } else {
      setshowBg(false);
    }
  };
  return (
    <div className="container">
      <div className="">
        <Navbar bg="transparent" expand="lg" className="rounded-pill">
          <NavbarBrand href="#">Brand</NavbarBrand>
          <Navbar.Toggle id="basic-navbar-nav" />
          <Navbar.Collapse
            id="Bassoc-navbar-nav"
            className=" text-uppercase d-flex justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#experiences">Experiences</Nav.Link>
              <Nav.Link href="#contract">Contract</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarContent;
