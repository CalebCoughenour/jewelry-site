import React from "react";
import AboutUs from '../../components/AboutUs/AboutUs';
import OrderInformation from "../../components/OrderInformation/OrderInformation";
import '../../App.css';

const Home = () => {
  return (
    <>
      <div className="home-background">
        <AboutUs />
        <OrderInformation />
      </div>
    </>
  )
};

export default Home;