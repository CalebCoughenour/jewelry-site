import styled from 'styled-components';

export const FooterSec = styled.div`
  padding-bottom: 15px;
  background: #7368A3;
  border-top: 1px solid black;
  width: 100%;
`;

export const FooterTitle = styled.a`
  font-size: 25px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    transition: 0.3s ease-out;
  }
`;

export const FooterLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  margin-left: .5rem;
  margin-right: .5rem;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    transition: 0.3s ease-out;
  }
`;

export const FooterLogo = styled.img`
  cursor: pointer;
`;

export const FooterEmail = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  margin-left: .5rem;
  margin-right: .5rem;
  word-break: column;
  

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    transition: 0.3s ease-out;
  }
`

export const FooterPhoneNumber = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  margin-left: .5rem;
  margin-right: .5rem;
  display: column;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    transition: 0.3s ease-out;
  }
`;