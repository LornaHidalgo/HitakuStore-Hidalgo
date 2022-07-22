import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

import { CartWidget } from "./CartWidget";
import { WishIcon } from "./WishIcon";

export const NavBar = () => {
  
  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar-bg">
        <Container>
          <Link to="/">
            {" "}
            <img className="logo-nav" src="hitakustore.png" alt="logo de la marca" />{" "}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Link to="/">Inicio</Link>
              <NavDropdown title="Productos" className="dropdown">
                <Link to="/productos/all">Todos</Link>
                <NavDropdown.Divider />
                <Link to="/productos/Posters">Posters</Link>
                <Link to="/productos/Figuras">Figuras</Link>
                <Link to="/productos/Llaveros">Llaveros</Link>
                <Link to="/productos/Otros">Otros</Link>
                
               
              </NavDropdown>
              <Link to="/contacto">Contacto</Link>
            </Nav>
            <div className="alig-right">
              <WishIcon />
              <CartWidget />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
