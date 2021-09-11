import styled, { css } from "styled-components";

const Article = styled.article`
  display: flex;
  margin: 10px;
  flex-direction: ${({ direction = "row" }: { direction: string }) =>
    props.direction || "row"};
  ${({ isShadow = false }: { isShadow: boolean }) =>
    isShadow &&
    css`
      box-shadow: ${({ color = "black" }: { color: string }) =>
        `5px 5px 20px ${color}`};
    `}
`;

export default Article;
