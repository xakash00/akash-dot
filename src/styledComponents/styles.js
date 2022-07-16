import styled from "styled-components";
import { setLocale } from "yup";


export const Sidebar = styled.div`
width:100%;
background-color:${props => props.bgColor};
height:100rem;
position:fixed;
left:${props => props.sidebar};
transition: all 0.4s;
z-index:99;
`
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
  color:${props => props.color};
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
  border: 1px solid #ccc;
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
background-color: ${props => props.color} ;
border-radius: 50%;
width: 4rem;
height: 4rem;
text-align: center;
justify-content: center;
align-items: center;
transition: transform 0.3s ease-in;
${props => props.hover === true && `transform: scale(1.1)`}
@media (max-width: 768px) {
  width: 2rem;
height: 2rem;
  }

`
export const Initials = styled.p`
 font-family: "Montserrat", sans-serif;
 color:#fff;
 font-size: 1.7rem; 
 position:relative;
 top: 0.7rem;
 @media (max-width: 768px) {
  font-size: 0.8rem; 
  top: 0.4rem;

  }
`

export const StyledText = styled.div`
color:${props => props.color};
 font-family: "Montserrat", sans-serif;
font-size:${props => props.size};
@media (max-width: 768px) {
  font-size:${props => props.mSize};
  }
`
export const StyledButton = styled.button`
color:${props => props.color};
 font-family: "Montserrat", sans-serif;
 background-color: ${props => props.bgColor};
 border:none;
 border-radius:7px;
font-size:${props => props.size};
@media (max-width: 768px) {
  font-size:${props => props.mSize};
  }
`

export const Icon = styled.i`
color:${props => props.color};
font-size: 1.2rem;
transition: font-size 0.3s ease-in;
${props => props.hover === true && `font-size: 1.4rem`}
`

export const Button = styled.button`
border: none;
background: none;
  &:hover {
   border:none
  }
`
export const Hr = styled.hr`
color:${props => props.color}
`

