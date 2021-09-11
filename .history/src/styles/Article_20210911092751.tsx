import styled, { css } from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: ${(props: { direction: string }) => props.direction || "row"};
  margin: 10px;
  ${(props: { isShadow: boolean }) =>
    props.isShadow &&
    css`
      box-shadow: ${props => `5px 5px 20px ${props.color || "black"}`};
    `}
`;

export default Article;
