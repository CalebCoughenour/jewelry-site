import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { OrderInfoSec, OrderInfoText, OrderInfoTitle, OrderInfoList, OrderInfoListItem, OrderInfoSecEmail, OrderInfoSecPhoneNum, OrderFormLink } from './OrderInformation.elements';

const OrderInformation = () => {
  return(
    <>
      <OrderInfoSec>
        <Container>
          <Row>
            <Card style={{ background: '#897fb1f0', border: '1px solid black', borderRadius: '5px', alignItems: 'center'}}>
              <OrderInfoTitle src='images/order-information/section-title.webp' alt=''/>
              <OrderInfoText style={{ color: 'red' }}>USA WHOLESALE ONLY</OrderInfoText>
              <OrderInfoList>
              <OrderInfoListItem><strong>We are wholesale ONLY. Resalers Tax License may be required</strong></OrderInfoListItem>
                <OrderInfoListItem><strong>*</strong> All Bodhi Jewelry is 925 Sterling Silver (except where noted)</OrderInfoListItem>
                <OrderInfoListItem><strong>*</strong> Prices may be subject to change</OrderInfoListItem>
                <OrderInfoListItem><strong>* Shipping by USPS Priority Mail:</strong> A flat $ 8.95 shipping charge.</OrderInfoListItem>
                <OrderInfoListItem><strong>* Shipping by UPS or FedEx:</strong> by request only and fee will apply</OrderInfoListItem>
                <OrderInfoListItem><strong>*</strong> Returns: Within 7-business days.</OrderInfoListItem>
                <OrderInfoListItem><strong>*</strong> Credit Card, PayPal, Bitcoin and other digital currency upon approval.</OrderInfoListItem>
                <OrderInfoListItem><strong>*</strong> If a requested ring size or stone is unavailable, Bodhi Jewelry will use discretion in fulfilling the ring size or stone unless "No Substitution" is specified.</OrderInfoListItem>
                <OrderInfoText style={{ marginTop: '20px' }}>TO ORDER: Download and fill the form from the <OrderFormLink href="/order">ORDER</OrderFormLink> page then fax or email your order directly to us</OrderInfoText>
              </OrderInfoList>
              <Row>
                <Col xl={true}>
                  <OrderInfoSecEmail href='mailto: mette@BodhiJewelry.com'>mette@BodhiJewelry.net</OrderInfoSecEmail>
                </Col>
                <Col xl={true}>
                  <OrderInfoSecPhoneNum>FAX: 810-815-0823</OrderInfoSecPhoneNum>
                </Col>
              </Row>
            </Card>
          </Row>
        </Container>
      </OrderInfoSec>
    </>
  )
};


export default OrderInformation;