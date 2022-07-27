import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Sidebar = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  height: 100rem;
  position: fixed;
  left: ${(props) => props.sidebar};
  transition: all 0.4s;
  z-index: 99;
`;
export const Text = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.font};
  font-family: Montserrat, sans-serif;
`;

export const InputBox = styled.input`
  background-color: ${(props) => props.bgColor};
`;

export const ThemedText = styled.span`
  color: ${(props) => props.color};
  font-family: Montserrat, sans-serif;
`;

export const Margin = styled.div`
  height: 2rem;
`;

export const SearchBox = styled.input`
  width: 21rem;
  padding: 1rem;
  height: 2.5rem;
  align-self: center;
  border: none;
  color: ${(props) => props.color};
  font-family: Montserrat, sans-serif;
  border-radius: 5px;
  outline: none;
  background: none;
  box-shadow: 0px 0px 7px #ccc;
  &::placeholder {
    color: #ccc;
  }
`;

export const SearchIcon = styled.i`
  position: relative;
  left: -2rem;
  color: #00adb5;
  font-weight: 800;
`;

export const TweetCard = styled.div`
  width: 40rem;
  height: max-content;
  padding: 1rem;
  border: 1px solid ${(props) => props.bgColor};
  border-radius: 10px;
  margin: auto;
  text-align: left;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Avatar = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in;
  ${(props) => props.hover === true && `transform: scale(1.1)`}
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;
export const Initials = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-size: 1.7rem;
  position: relative;
  top: 0.7rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    top: 0.4rem;
  }
`;

export const StyledText = styled.div`
  color: ${(props) => props.color};
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.size};
  @media (max-width: 768px) {
    font-size: ${(props) => props.mSize};
  }
`;
export const StyledButton = styled.button`
  color: ${(props) => props.color};
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.bgImage};
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.size};
  padding: 5px;
  width: 100%;
  @media (max-width: 768px) {
    font-size: ${(props) => props.mSize};
  }
`;

export const Icon = styled.i`
  color: ${(props) => props.color};
  font-size: 1.2rem;
  transition: font-size 0.3s ease-in;
  ${(props) => props.hover === true && `font-size: 1.4rem`}
`;

export const Button = styled.button`
  border: none;
  background: none;

  &:hover {
    border: none;
  }
`;
export const Hr = styled.hr`
  color: ${(props) => props.color};
`;

/* marketPlace sidebar */

export const SideNav = styled.div`
  width: 15rem;
  border-radius: 10px;
  position: fixed;
  text-align: left;
  padding: 1rem;
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.bgImage};
  height: 40rem;
  box-shadow: 0px 0px 7px #ccc;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const List = styled.li`
  font-family: "Montserrat", sans-serif;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
`;

export const Card = styled.div`
  background-color: ${(props) => props.bgColor};
  border: none;
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.color};
  transition: font-size 0.3s ease-in-out;
  &:hover {
    font-size: 1.1rem;
    color: ${(props) => props.color};
  }
  &.active {
    color: ${(props) => props.active};
  }
`;

export const ProductCard = styled.div`
  width: 18rem;
  border: 1px solid #dee4ea;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  border-radius: 7px;
  transition: box-shadow 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 80%;
    text-align: left;
    margin: auto;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 1024px) {
    width: 100%;
    text-align: left;
    margin: auto;
    padding-bottom: 0.5rem;
  }
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;
export const CardBody = styled.div`
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
export const ProductImage = styled.img`
  height: 15rem;
  object-fit: cover;
  transition: transform 0.3s ease-in;
  ${(props) => props.hover === true && `transform: scale(1.1)`}
`;

export const Span = styled.span`
  color: ${(props) => props.color};
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.size};
`;
