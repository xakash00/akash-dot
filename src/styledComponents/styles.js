import styled from "styled-components";

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
  height: 12rem;
  padding: 3rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: auto;
  text-align: left;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 7px #ccc;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
