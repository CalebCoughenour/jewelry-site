import styled from "styled-components";

export const OrderInfoSec = styled.div`
  padding: 100px 0px;
`;

export const OrderInfoTitle = styled.img`
  width: 100%;
`;

export const OrderInfoText = styled.h3`
  text-decoration: underline;

  @media screen and (max-width: 500px){
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 300px){
    font-size: 1rem;
  }
`;

export const OrderInfoList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0px;
`;

export const OrderInfoListItem = styled.li`
  font-size: 1.5rem;
  margin: 0px 50px;

  @media screen and (max-width: 997px){
    margin: 0px 20px;
  }

  @media screen and (max-width: 771px){
    font-size: 1.3rem;
    margin: 0px 10px;
  }

  @media screen and (max-width: 400px){
    font-size: 1.1rem;
    margin: 0px 10px;
  }
`;

export const OrderInfoSecPhoneNum = styled.p`
  font-size: 1.5rem;
  color: #000000;

  @media screen and (max-width: 300px){
    font-size: 1.2rem;
  }
`;

export const OrderInfoSecEmail = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #000000;
  font-size: 1.5rem;

  @media screen and (max-width: 300px){
    font-size: 1.2rem;
  }
`;

export const OrderFormLink = styled.a`
`;