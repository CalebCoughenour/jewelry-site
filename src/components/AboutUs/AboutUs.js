import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { AboutUsSec, AboutUsTitle, AboutUsText, AboutUsImg } from './AboutUs.elements';

const AboutUs = () => {
  return (
    <AboutUsSec>
      <Container>
        <Row style={{ alignItems: 'center'}}>
          <Card style={{ background: '#897fb1f0', border: '1px solid black', borderRadius: '5px'}}>
            <AboutUsTitle src='images/about-us/alt-about-banner-2.webp' alt='Banner image that says Bodhi Jewelry' />
            <Col xs={true}>
              <AboutUsImg src='images/about-us/about-us-img.webp' alt='A photo of a statue wearing a necklace with a large pendant' />
              <AboutUsText>Bodhi Jewelry has been directly importing affordable jewelry for over 25 years.<br /><br />
              We personally visit the small, family-owned workshops in Asia to provide clean, crisp, attractive silver jewelry at very reasonable prices.<br /><br />
              We offer great value so stores big and small can thrive. <br/><br/>
              Each year we revise and update the inventory, this means that throughout the year, you can reasonably expect a high fulfillment of your order.<br/><br/>
              Ordering is fast, easy, and reliable. Generally you can expect to receive your order within 3-4 business days from the time we receive your order.
              </AboutUsText>
            </Col>
          </Card>
        </Row>  
      </Container>      
    </AboutUsSec>
  )
};

export default AboutUs;