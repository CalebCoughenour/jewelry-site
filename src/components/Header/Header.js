import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { HeaderEmail, HeaderLogo, HeaderTitle } from './Header.elements';
import { AiOutlineMail} from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" style={{ background: '#7368A3', borderBottom: '1px solid black'}} >
        <Container>
          <HeaderLogo src='images/logo/mandala-icon-footer-header.webp' alt='A hand drawn mandala' />
          <HeaderTitle href='/'>Bodhi Jewelry</HeaderTitle>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/order">Order</Nav.Link>
            </Nav>
            <AiOutlineMail />
            <HeaderEmail href="mailto: mette@BodhiJewelry.net">mette@BodhiJewelry.net</HeaderEmail>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Header;