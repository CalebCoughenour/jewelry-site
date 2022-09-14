import styled from "styled-components";

export const AboutUsSec = styled.div`
  padding: 100px 0px;
`;

export const AboutUsTitle = styled.img`
  width: 100%;
`;

export const AboutUsText = styled.h3`
  margin: 150px 20px;

  @media screen and (max-width: 1320px) {

    margin: 120px 20px;
  }

  @media screen and (max-width: 997px) {
    margin: 90px 20px;
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    margin: 50px 15px;
  }

  @media screen and (max-width: 485px) {
    margin: 30px 10px;
    font-size: .8rem;
  }
`;

export const AboutUsImg = styled.img`
  margin: 50px 10px;
  border: 1px solid black;
  float: right;
  width: 30%;
`;