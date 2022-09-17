import React from 'react';
import { FooterSec, FooterTitle, FooterLink, FooterLogo, FooterPhoneNumber, FooterEmail } from './Footer.elements';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFax } from 'react-icons/fa';


const Footer = () => {
  return(
    <>
      <FooterSec>
        <Container>
          <Row style={{ textAlign: 'center' }}>
            <Col xl={true}>
              <FooterLogo src='images/logo/mandala-icon-footer-header.webp' alt='A hand drawn mandala' />            
              <FooterTitle href="/">Bodhi Jewelry</FooterTitle>
            </Col>
            <Col xl={true} style={{ marginTop: '1.5rem'}}>
              <AiOutlineMail style={{ marginRight: '5px'}} />
              <FooterEmail href="mailto: mette@BodhiJewelry.net">mette@BodhiJewelry.net</FooterEmail>
            </Col>
            <Col xl={true} style={{ marginTop: '1.5rem'}}>
              <FaFax style={{ marginRight: '7px'}} />
              <FooterPhoneNumber href="tel: 8108150823">Fax: 810-815-0823</FooterPhoneNumber>
            </Col>
          </Row>
        </Container>
      </FooterSec>
    </>
  )
};

export default Footer;