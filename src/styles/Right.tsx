import styled from "styled-components";

const Right = styled.article`
  position: fixed;
  top: 5px;
  right: 10px;
  padding: 5px;
  color: wheat;
  z-index: 100;
  > * {
    cursor: pointer;
  }
`;

export default Right;
