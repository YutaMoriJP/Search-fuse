import styled from "styled-components";

const Box = styled.article`
  background-color: ${(props: { background: string }) => props.background};
`;

export default Box;
