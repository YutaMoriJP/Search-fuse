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
    padding: 15px 30px;
    min-width: 250px;
    border-right: 10px solid #095ddb;
    border-radius: 6px;
    :hover {
      transform: translateX(-5%);
      border-right: 10px solid #c807f3;
    }
    :active {
      background-image: linear-gradient(315deg, #0652c5 0%, #d4418e 84%);
    }
  }
`;

export default InputButton;
