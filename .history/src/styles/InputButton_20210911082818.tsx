import styled from "styled-components";

const InputButton = styled.button`
  && {
    background-color: #d4418e;
    background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%);
    color: white;
    border: 0;
    cursor: pointer;
    margin: 5px;
    transition: transform 1s ease-in-out, border-right 1.5s ease-out;
    padding: 20px 30px;
    display: block;
    border-right: 20px solid #0652c5;
    border-radius: 6px;
    :hover {
      transform: translateX(-5%);
      border-right: 20px solid #4e045f;
    }
    :active {
      transform: scale(0.95);
    }
  }
`;

export default InputButton;
