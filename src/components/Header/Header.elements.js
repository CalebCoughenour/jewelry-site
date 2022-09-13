import styled from "styled-components";

export const HeaderEmail = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.55);
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
    transition: 0.3s ease-out;
  }
`;

export const HeaderLogo = styled.img`
  cursor: pointer;
  margin-right: 1rem;
`;

export const HeaderTitle = styled.a`
  font-size: 25px;
  margin-right: 1rem;

  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    transition: 0.3s ease-out;
  }
`;