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
      <Nav.Link href="#">JEWELRY</Nav.Link>
      <Nav.Link href="#">WATCH BANDS</Nav.Link>
      <Nav.Link href="#">COLLECTIONS</Nav.Link>
      <Nav.Link href="#">SHOP INSTAGRAM</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
        </div>
    );
};

export default NavBarComp; 