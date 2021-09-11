import styled from "styled-components";

const InputButton = styled.button`
  && {
    background-color: #d4418e;
    color: white;
    border: 0;
    cursor: pointer;
    margin: 5px;
    padding: 15px 30px;
    min-width: 250px;
    font-weight: 900;
    border-right: 10px solid #095ddb;
    border-radius: 6px;
    transition: transform 1s ease-in-out, border-right 1.5s ease-in-out,
      background-color 0.3s ease-in-out;

    :hover {
      transform: translateX(-5%);
      //border-right: 10px solid #093d8a;
    }

    :active {
      background-color: #0652c5;
      transform: scale(0.99);
      //border-right: 10px solid #d4418e;
    }
  }
`;

export default InputButton;
