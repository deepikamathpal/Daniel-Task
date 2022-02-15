import React from 'react';
import {Container,Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBarComp = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as = {Link} to ={"/"}>DW</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as = {Link} to ={"/"}>WATCHES</Nav.Link>
      <Nav.Link href="#pricing">JEWELRY</Nav.Link>
      <Nav.Link href="#pricing">WATCH BANDS</Nav.Link>
      <Nav.Link href="#pricing">COLLECTIONS</Nav.Link>
      <Nav.Link href="#pricing">SHOP INSTAGRAM</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
        </div>
    );
};

export default NavBarComp; 