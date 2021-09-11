import styled from "styled-components";

const Link = styled.a`
  text-decoration: 0;
  color: ${props => props.color || "white"};
`;

export default Link;
