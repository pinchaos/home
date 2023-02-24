import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")<any>`
  background: ${(p) => p.background || "#f1f2f3"};
  padding: 2.5rem 0;
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("section")<any>`
  background: ${(p) => p.background || "#f1f2f3"};
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")<any>`
  color: ${(p) => p.color || "#18216d"};
  font-size: 14px;
  width: 100%;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    padding-left: 15px;
    &:hover,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;
  }
`;

export const TitleLink = styled("p")<any>`
  color: ${(p) => p.color || "#18216d"};
  max-width: fit-content;
  border-bottom: 1px solid ${(p) => p.color || "#18216d"};
  cursor: pointer;
  margin-top: 1rem;
  font-size: 22px;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom: 1px solid ${(p) => p.hoverBorderColor || "#ff825c"};
    color: ${(p) => p.hoverColor || "#ff825c"};
  }

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;
