import styled from "styled-components";

const InputButton = styled.input`
  && {
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
    color: white;
    border: 0;
    cursor: pointer;
    margin: 5px;
    transition: transform 1s ease-in-out;
    :hover {
      transform: translateX(-10%);
    }
  }
`;

export default InputButton;
