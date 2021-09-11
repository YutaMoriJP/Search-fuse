import styled from "styled-components";

const InputButton = styled.input`
  && {
    background-color: #d4418e;
    background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%);
    color: white;
    border: 0;
    cursor: pointer;
    margin: 5px;
    transition: all 1s ease-in-out;
    padding: 10px 30px;
    :hover {
      transform: translateX(-5%);
      border-right: 20px solid purple;
    }
  }
`;

export default InputButton;
