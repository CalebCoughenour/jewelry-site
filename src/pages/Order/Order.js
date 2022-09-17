import React from "react";
import './Order.css';
import photo1 from './orderForm.jpg';

const Order = () => {
  return (
    <>
      <div className="home-background">
      <div className="card w-50 mb-3" style={{ background: '#897fb1f0', border: '1px solid black', borderRadius: '5px'}}>
        <div className="col-sm-3">
          <div className="HtoHeader">
            <h1>Bhodi Jewlery </h1>
            <h3>How to Order: </h3>
            <div className="Instructions">
              <ol>
                <li>Download PDF Form Here: <a href={require("./orderform.pdf")} target="_blank" rel="noopener noreferrer"> <i class="fa-solid fa-download"></i></a></li>
                <li>Fill form out</li>
                <li>Email form to mette@BohdiJewelry.net</li>
              </ol>
            </div>
          </div>
        </div>
      </div>


        <div className="orderImage">
          <img src={photo1} alt="OrderForm" width="600" height="600" />
        </div>
      </div>
    </>
  )
};


export default Order;