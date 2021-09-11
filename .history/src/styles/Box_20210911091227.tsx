import styled from "styled-components";

const Box = styled.article`
  background-color: ${(props: { background: string }) =>
    props.background || "#272727"};
  display: flex;
  justify-content: center;
`;

export default Box;
